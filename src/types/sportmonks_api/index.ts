type League = {
  id: number;
  active: boolean;
  type: 'domestic' | "cup_international",
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

type Team = {
  id: number;
  legacy_id: number;
  name: string;
  short_code: string;
  twitter: string | null;
  country_id: number;
  national_team: boolean;
  founded: number;
  logo_path: string;
  venue_id: number;
  current_season_id: number;
  is_placeholder: boolean;
}

type Player = {
  player_id: number;
  team_id: number;
  country_id: number;
  position_id: number;
  common_name: string;
  display_name: string;
  fullname: string;
  firstname: string;
  lastname: string;
  nationality: string;
  birthdate: string;
  birthcountry: string;
  birthplace: string;
  height: string;
  weight: string | null,
  image_path: string;
}
