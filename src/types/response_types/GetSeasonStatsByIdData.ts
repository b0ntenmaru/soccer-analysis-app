export type GetSeasonStatsByIdData = {
  id: number;
  name: string;
  league_id: number;
  is_current_season: boolean;
  current_round_id: number;
  current_stage_id: number;
  stats: {
    data: {
      id: number;
      season_id: number;
      league_id: number;
      number_of_clubs: number;
      number_of_matches: number;
      number_of_matches_played: number;
      number_of_goals: number;
      matches_both_teams_scored: number;
      number_of_yellowcards: number;
      number_of_yellowredcards: number;
      number_of_redcards: number;
      avg_goals_per_match: number;
      avg_yellowcards_per_match: number;
      avg_yellowredcards_per_match: number;
      avg_redcards_per_match: number;
      team_with_most_goals_id: number;
      team_with_most_goals_number: number;
      team_with_most_conceded_goals_id: number;
      team_with_most_conceded_goals_number: number;
      team_with_most_goals_per_match_id: number;
      team_with_most_goals_per_match_number: number;
      season_topscorer_id: number;
      season_topscorer_number: number;
      season_assist_topscorer_id: number;
      season_assist_topscorer_number: number;
      team_most_cleansheets_id: number;
      team_most_cleansheets_number: number;
      goals_scored_minutes: {
        '0-15': string;
        '15-30': string;
        '30-45': string;
        '45-60': string;
        '60-75': string;
        '75-90': string;
      },
      goalkeeper_most_cleansheets_id: number;
      goalkeeper_most_cleansheets_number: number;
      goal_scored_every_minutes: number;
      btts: number;
      goal_line: {
        over: {
          0_5: number;
          1_5: number;
          2_5: number;
          3_5: number;
          4_5: number;
          5_5: number;
        },
        under: {
          0_5: number;
          1_5: number;
          2_5: number;
          3_5: number;
          4_5: number;
          5_5: number;
        }
      },
      avg_corners_per_match: number;
      team_most_corners_count: number;
      team_most_corners_id: number;
      goals_conceded: {
        all: number;
        home: number;
        away: number;
      },
      goals_scored: {
        all: number;
        home: number;
        away: number;
      },
      win_percentage: {
        all: number;
        home: number;
        away: number;
      },
      defeat_percentage: {
        all: number;
        home: number;
        away: number;
      },
      draw_percentage: number;
      avg_homegoals_per_match: number;
      avg_awaygoals_per_match: number;
      avg_player_rating: number;
      updated_at: string;
      topscorer: {
        data: Player;
      };
      assisttopscorer: {
        data: Player;
      };
      mostcleansheetsteam: {
        data: Team;
      };
      mostcleansheetsgoalkeeper: {
        data: Player
      };
      mostgoalsteam: {
        data: Team;
      };
      mostgoalspermatchteam: {
        data: Team
      };
      mostconcededgoalsteam: {
        data: Team
      };
      mostcornersteam: {
        data: Team
      };
    };
  };
};

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
  weight: string;
  image_path: string;
};

type Team = {
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
};
