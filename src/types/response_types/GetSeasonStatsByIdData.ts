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
      /**
       * シーズンに参加したクラブ数
       */
      number_of_clubs: number;
      /**
       * シーズンの試合数
       */
      number_of_matches: number;
      /**
       * シーズン中に完了した試合数
       */
      number_of_matches_played: number;
      /**
       * 得点数
       */
      number_of_goals: number;
      /**
       * 両チームとも得点した試合数
       */
      matches_both_teams_scored: number;
      /**
       * イエローカードの数
       */
      number_of_yellowcards: number;
      /**
       * 退場のきっかけとなったイエローカードの数
       */
      number_of_yellowredcards: number;
      /**
       * レッドカードの数
       */
      number_of_redcards: number;
      /**
       * 1試合あたりの平均得点数
       */
      avg_goals_per_match: number;
      /**
       * 1試合あたりの平均イエローカード数
       */
      avg_yellowcards_per_match: number;
      /**
       * 1試合あたりの退場のきっかけとなったイエローカード数の平均
       */
      avg_yellowredcards_per_match: number;
      /**
       * 1試合あたりの平均レッドカード数
       */
      avg_redcards_per_match: number;
      /**
       * シーズンで最も得点したチームのID
       */
      team_with_most_goals_id: number;
      /**
       * シーズンで最も得点をとったチームの得点数
       */
      team_with_most_goals_number: number;
      /**
       * シーズンで最も失点したチームのID
       */
      team_with_most_conceded_goals_id: number;
      /**
       * シーズンで最も失点したチームの失点数
       */
      team_with_most_conceded_goals_number: number;
      /**
       * 1試合で最も得点したチームのID
       */
      team_with_most_goals_per_match_id: number;
      /**
       * 1試合で最も得点したチームの得点数
       */
      team_with_most_goals_per_match_number: number;
      /**
       * シーズン最多得点者のID
       */
      season_topscorer_id: number;
      /**
       * シーズン最多得点者の得点数
       */
      season_topscorer_number: number;
      /**
       * シーズン最多アシスト者のID
       */
      season_assist_topscorer_id: number;
      /**
       * シーズン最多アシスト者のアシスト数
       */
      season_assist_topscorer_number: number;
      /**
       * シーズン最多クリーンシートチームのID
       */
      team_most_cleansheets_id: number;
      /**
       * シーズン最多クリーンシートチームのクリーンシート数
       */
      team_most_cleansheets_number: number;
      /**
       * 特定の時間に得点する確率
       */
      goals_scored_minutes: {
        '0-15': string;
        '15-30': string;
        '30-45': string;
        '45-60': string;
        '60-75': string;
        '75-90': string;
      },
      /**
       * 最もクリーンシートが多いキーパーのID
       */
      goalkeeper_most_cleansheets_id: number;
      /**
       * 最もクリーンシートが多いキーパーのクリーンシート数
       */
      goalkeeper_most_cleansheets_number: number;
      goal_scored_every_minutes: number;
      /**
       * シーズン中の両チームが得点確率
       */
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
      /**
       * 1試合あたりのコーナーキック数
       */
      avg_corners_per_match: number;
      /**
       * 最もコーナーキックが多いチームのコーナーキック数
       */
      team_most_corners_count: number;
      /**
       * 最もコーナーキックが多いチームのID
       */
      team_most_corners_id: number;
      /**
       * 平均失点数
       */
      goals_conceded: {
        all: number;
        home: number;
        away: number;
      },
      /**
       * 平均得点数
       */
      goals_scored: {
        all: number;
        home: number;
        away: number;
      },
      /**
       * 平均勝率
       */
      win_percentage: {
        all: number;
        home: number;
        away: number;
      },
      /**
       * 平均敗北数
       */
      defeat_percentage: {
        all: number;
        home: number;
        away: number;
      },
      /**
       * 引き分け確率
       */
      draw_percentage: number;
      /**
       * 1試合あたりの平均ホーム得点数
       */
      avg_homegoals_per_match: number;
      /**
       * 1試合あたりの平均アウェーゴール数
       */
      avg_awaygoals_per_match: number;
      /**
       * 選手の平均レーティング
       */
      avg_player_rating: number;
      updated_at: string;
      /**
       * 最多得点プレイヤー
       */
      topscorer: {
        data: Player;
      };
      /**
       * 最多アシストプレイヤー
       */
      assisttopscorer: {
        data: Player;
      };
      /**
       * 最多クリーンシートチーム
       */
      mostcleansheetsteam: {
        data: Team;
      };
      /**
       * 最多クリーンシートキーパー
       */
      mostcleansheetsgoalkeeper: {
        data: Player
      };
      /**
       * 最多得点チーム
       */
      mostgoalsteam: {
        data: Team;
      };
      /**
       * 1試合あたりの最多得点チーム
       */
      mostgoalspermatchteam: {
        data: Team
      };
      /**
       * 最多失点チーム
       */
      mostconcededgoalsteam: {
        data: Team
      };
      /**
       * 最多コーナーキックチーム
       */
      mostcornersteam: {
        data: Team
      };
    };
  };
  goalscorers: {
    data: Array<TopPlayer>
  };
  assistscorers: {
    data: Array<TopPlayer>;
  };
  cardscorers: {
    data: Array<TopPlayer>;
  };
};

export type TopPlayer = {
  position: number;
  season_id: number;
  player_id: number;
  team_id: number;
  stage_id: number;
  goals?: number;
  assists?: number;
  penalty_goals: number;
  type: string;
  player: {
    data: Player;
  }
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
  weight: string;
  image_path: string;
  team: {
    data: Team;
  }
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
