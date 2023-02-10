export type SeasonStandings = {
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
  standings: {
    data: Array<Standings>
  }
};

type Standings = {
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
    data: StandingsTeamData
  }
}

type StandingsTeamData = {
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
