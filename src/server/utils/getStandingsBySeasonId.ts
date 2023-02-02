const config = useRuntimeConfig()
const apiPath = config.public.API_PATH;
const apiKey = config.public.API_KEY;

export const getStandingsBySeasonId = async (args: { seasonId: number }): Promise<GetStandingsBySeasonIdData> => {
  const { seasonId } = args;
  const response: any = await $fetch(`${apiPath}/standings/season/${seasonId}?api_token=${apiKey}&include=standings.team,`);
  return convertToDto(response.data[0]);
};

/**
 * APIから渡ってくる値のデータ構造が歪、かつ不要な値も多いので必要な値に絞り込む
 */
const convertToDto = (data: any): GetStandingsBySeasonIdData => {

  const {
    id,
    name,
    league_id,
    season_id,
    round_id,
    round_name,
    type,
    stage_id,
    stage_name,
    resource,
  } = data

  const standings = data.standings.data.map(s => {
    const {
      position,
      team_id,
      team_name,
      round_id,
      round_name,
      group_id,
      group_name,
      overall,
      home,
      away,
      total,
      result,
      points,
      recent_form,
      status,
    } = s

    const team = s.team.data;

    return {
      position,
      team_id,
      team_name,
      round_id,
      round_name,
      group_id,
      group_name,
      overall,
      home,
      away,
      total,
      result,
      points,
      recent_form,
      status,
      team
    }
  });


  return {
    id,
    name,
    league_id,
    season_id,
    round_id,
    round_name,
    type,
    stage_id,
    stage_name,
    resource,
    standings,
  }
}

type GetStandingsBySeasonIdData = {
  id: number;
  name: string;
  league_id: number;
  season_id: number;
  round_id: number;
  round_name: number;
  type: string;
  stage_id: number;
  stage_name: string;
  resource: string;
  standings: [
    {
      position: number;
      team_id: number;
      team_name: string;
      round_id: number;
      round_name: number;
      group_id: number | null,
      group_name: number | null,
      overall: {
        games_played: number;
        won: number;
        draw: number;
        lost: number;
        goals_scored: number;
        goals_against: number;
        points: number;
      },
      home: {
        games_played: number;
        won: number;
        draw: number;
        lost: number;
        goals_scored: number;
        goals_against: number;
        points: number;
      },
      away: {
        games_played: number;
        won: number;
        draw: number;
        lost: number;
        goals_scored: number;
        goals_against: number;
        points: number;
      },
      total: {
        goal_difference: string;
        points: number;
      },
      result: string;
      points: number;
      recent_form: string;
      status: string | null,
      team: {
        id: number;
        legacy_id: number;
        name: string;
        short_code: string;
        twitter: string;
        country_id: number;
        national_team: boolean;
        founded: number;
        logo_path: string;
        venue_id: number;
        current_season_id: number;
        is_placeholder: boolean;
      }
    }
  ]
}
