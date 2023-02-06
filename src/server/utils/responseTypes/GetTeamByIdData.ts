type CountryData = {
  id: number;
  name: string;
  image_path: string;
  extra: {
    continent: string;
    sub_region: string;
    world_region: string;
    fifa: string;
    iso: string;
    iso2: string;
    longitude: number;
    latitude: number;
    flag: string;
  }
}

type CoachData = {
  coach_id: number;
  team_id: number;
  country_id: number;
  common_name: string;
  fullname: string;
  firstname: string;
  lastname: string;
  nationality: string;
  birthdate: string;
  birthcountry: string;
  birthplace: string;
  image_path: string;
}

type SquadData = Array<{
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
}>

/**
 * /teams/[id]が返すDataの型
 */
type GetTeamByIdData = {
  id: number;
  legacy_id: number;
  name: string;
  short_code: string;
  twitter: string;
  country_id: number;
  national_team: false;
  founded: number;
  logo_path: string;
  venue_id: number;
  current_season_id: number;
  is_placeholder: false;
  country: {
    data: CountryData
  };
  squad: {
    data: SquadData;
  };
  coach: {
    data: CoachData
  }
}
