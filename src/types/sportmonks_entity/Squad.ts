export type Squad = {
  player_id: number;
  position_id: number;
  number: number;
  captain: number;
  injured: boolean;
  minutes: number;
  appearences: number;
  lineups: number;
  substitute_in: number | null;
  substitute_out: number | null;
  substitutes_on_bench: number | null;
  goals: number | null;
  owngoals: number | null;
  assists: number | null;
  saves: number;
  inside_box_saves: number;
  dispossesed: number | null;
  interceptions: number | null;
  yellowcards: number | null;
  yellowred: number | null;
  redcards: number | null;
  tackles: number;
  blocks: number | null;
  hit_post: number | null;
  cleansheets: number;
  rating: number;
  fouls: {
    committed: number | null;
    drawn: number;
  };
  crosses: {
    total: number | null;
    accurate: number | null;
  };
  dribbles: {
    attempts: number;
    success: number;
    dribbled_past: number | null;
  };
  duels: {
    total: number;
    won: number;
  };
  passes: {
    total: number;
    accuracy: number;
    key_passes: number | null;
  };
  penalties: {
    won: number | null;
    scores: number | null;
    missed: number | null;
    committed: number | null;
    saves: number | null;
  };
  shots: {
    shots_total: number | null;
    shots_on_target: number | null;
    shots_off_target: number | null;
  }
}
