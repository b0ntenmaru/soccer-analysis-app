export type Season = {
  id: number;
  name: string;
  league_id: number;
  is_current_season: boolean;
  current_round_id: number | null;
  current_stage_id: number | null;
}
