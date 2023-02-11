export type League = {
  id: number;
  active: boolean;
  type: 'domestic' | 'cup_international',
  legacy_id: number;
  country_id: number;
  logo_path: string;
  name: string;
  is_cup: boolean;
  is_friendly: boolean;
  current_season_id: number;
  current_round_id: number | null;
  current_stage_id: number | null;
  live_standings: boolean;
  coverage: {
    predictions: boolean;
    topscorer_goals: boolean;
    topscorer_assists: boolean;
    topscorer_cards: boolean;
  },
  seasons: {
    data: Array<Season>;
  },
  country: {
    data: Country
  }
}

type Season = {
  id: number;
  name: string;
  league_id: number;
  is_current_season: boolean;
  current_round_id: number | null;
  current_stage_id: number | null;
}

type Country = {
  id: number;
  name: string;
  image_path: string;
  extra: any
}
