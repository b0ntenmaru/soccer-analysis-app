
export type Fixture = {
  id: number;
  league_id: number;
  season_id: number;
  stage_id: number;
  round_id: number;
  group_id: number | null;
  aggregate_id: number | null;
  venue_id: number;
  referee_id: number;
  localteam_id: number;
  visitorteam_id: number;
  winner_team_id: number;
  weather_report: {
    code: string;
    type: string;
    icon: string;
    temperature: {
      temp: number;
      unit: string;
    };
    temperature_celcius: {
      temp: number;
      unit: string;
    };
    clouds: string;
    humidity: string;
    pressure: number;
    wind: {
      speed: string;
      degree: number;
    };
    coordinates: {
      lat: number;
      lon: number;
    };
    updated_at: string;
  };
  commentaries: boolean;
  attendance: null;
  pitch: string;
  details: string | null;
  neutral_venue: boolean;
  winning_odds_calculated: boolean;
  formations: {
    localteam_formation: string;
    visitorteam_formation: string;
  };
  scores: {
    localteam_score: number;
    visitorteam_score: number;
    localteam_pen_score: null;
    visitorteam_pen_score: null;
    ht_score: string;
    ft_score: string;
    et_score: string | null;
    ps_score: string | null;
  };
  time: {
    status: string;
    starting_at: {
      date_time: string;
      date: string;
      time: string;
      timestamp: number;
      timezone: string;
    };
    minute: number;
    second: number | null;
    added_time: number;
    extra_minute: number | null;
    injury_time:number | null;
  };
  coaches: {
    localteam_coach_id: number;
    visitorteam_coach_id: number;
  };
  standings: {
    localteam_position: number;
    visitorteam_position: number;
  };
  assistants: {
    first_assistant_id: number;
    second_assistant_id: number;
    fourth_official_id: number;
  };
  leg: string;
  colors: {
    localteam: {
      color: string;
      kit_colors: string;
    };
    visitorteam: {
      color: string;
      kit_colors: string;
    }
  };
  deleted: number;
  is_placeholder: number;
  localTeam: {
    data: {
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
  };
  visitorTeam: {
    data: {
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
  };
  league: {
    data: {
      id: number;
      active: boolean;
      type: string;
      legacy_id: number;
      country_id: number;
      logo_path: string;
      name: string;
      is_cup: boolean;
      is_friendly: boolean;
      current_season_id: number;
      current_round_id: number;
      current_stage_id: number;
      live_standings: boolean;
      coverage: {
        predictions: boolean;
        topscorer_goals: boolean;
        topscorer_assists: boolean;
        topscorer_cards: boolean;
      }
    }
  }
}
