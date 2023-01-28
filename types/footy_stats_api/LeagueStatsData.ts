/**
 * リーグスタッツAPIが返却する値
 */
type LeagueStatsData = {
  season_id: number;
  name: string;
  english_name: string;
  name_jp: string;
  country: string;
  status: 'complete' | 'suspended' | 'canceled' | 'incomplete';
  division: number; // 何部か
  starting_year: number;
  ending_year: number;
  image: string; // リーグのイメージ画像パス
  club_num: number; // リーグ数
  season: string; // example: "2016/2017"
  totalMatches: number;
  matchesCompleted: number; // 完了した試合数
  canceledMatchesNum: number; // キャンセルされた試合数
  game_week: number; // 現在の試合週
  total_game_week: number; // 総試合週数
  progress: number; // 試合の進捗（%）
  top_scorers: Array<Player>; // 得点ランキング
  top_assists: Array<Player>; // アシストランキング
  top_clean_sheets: Array<Player>; // クリーンシート回数ランキング
}

/**
 * 選手（top_scorers / top_assists / top_clean_sheets）
 */
type Player = {
  id: number;
  competition_id: number;
  full_name: string;
  first_name: string;
  last_name: string;
  known_as: string;
  shorthand: string;
  age: number;
  height: number;
  weight: number;
  league: string;
  league_type: string;
  season: string;
  starting_year: number;
  ending_year: number;
  url: string;
  club_team_id: number;
  club_team_2_id: number;
  national_team_id: number;
  position: string;
  minutes_played_overall: number;
  minutes_played_home: number;
  minutes_played_away: number;
  birthday: number;
  nationality: string;
  continent: string;
  appearances_overall: number;
  appearances_home: number;
  appearances_away: number;
  goals_overall: number;
  goals_home: number;
  goals_away: number;
  clean_sheets_home: number;
  clean_sheets_away: number;
  clean_sheets_overall: number;
  conceded_overall: number;
  conceded_home: number;
  conceded_away: number;
  assists_overall: number;
  assists_home: number;
  assists_away: number;
  penalty_goals: number;
  penalty_misses: number;
  penalty_success: number;
  goals_involved_per_90_overall: number;
  assists_per_90_overall: number;
  goals_per_90_overall: number;
  clean_sheets_per_overall: number;
  goals_per_90_home: number;
  goals_per_90_away: number;
  min_per_goal_overall: number;
  conceded_per_90_overall: number;
  min_per_conceded_overall: number;
  cards_overall: number;
  yellow_cards_overall: number;
  red_cards_overall: number;
  min_per_match: number;
  min_per_card_overall: number;
  min_per_assist_overall: number;
  cards_per_90_overall: number;
  rank_in_league_top_attackers: number;
  rank_in_league_top_midfielders: number;
  rank_in_league_top_defenders: number;
  rank_in_club_top_scorer: number;
  last_match_timestamp: number;
}
