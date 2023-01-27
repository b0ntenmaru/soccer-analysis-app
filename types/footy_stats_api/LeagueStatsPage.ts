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
}
