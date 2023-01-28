/**
 * footystats apiから返却されたデータをフロントエンド用に変換する
 */
export const convertToLeagueStats = (fsApiResponseData: any): LeagueStatsData => {
  const {
    season_id,
    name,
    english_name,
    name_jp,
    country,
    status,
    division,
    starting_year,
    ending_year,
    image,
    club_num,
    season,
    totalMatches,
    matchesCompleted,
    canceledMatchesNum,
    game_week,
    total_game_week,
    progress,
    top_scorers,
    top_assists,
    top_clean_sheets,
  } = fsApiResponseData;

  return {
    season_id,
    name,
    english_name,
    name_jp,
    country,
    status,
    division,
    starting_year,
    ending_year,
    image,
    club_num,
    season,
    totalMatches,
    matchesCompleted,
    canceledMatchesNum,
    game_week,
    total_game_week,
    progress,
    top_scorers,
    top_assists,
    top_clean_sheets,
  }
}
