
export type TeamStatsData = Array<TeamStats>;

type TeamStats = {
  team_id: number;
  season_id: number;
  stage_id: number;
  /**
   * 勝利
   */
  win: {
    total: number;
    home: number;
    away: number;
  },
  /**
   * 引き分け
   */
  draw: {
    total: number;
    home: number;
    away: number;
  },
  /**
   * 敗北
   */
  lost: {
    total: number;
    home: number;
    away: number;
  },
  /**
   * 得点
   */
  goals_for: {
    total: number;
    home: number;
    away: number;
  },
  /**
   * 失点
   */
  goals_against: {
    total: number;
    home: number;
    away: number;
  },
  /**
   * クリーンシート
   */
  clean_sheet: {
    total: number;
    home: number;
    away: number;
  },
  /**
   * 得点できなかった試合数
   */
  failed_to_score: {
    total: number;
    home: number;
    away: number;
  },

  penalties: {
    awarded: number;
    scored: number;
    conceded: number;
  },
  /**
   *  15分のうちに得点した数とその確率
   * sample:
   * {
        "minute": "0-15",
        "count": 7,
        "percentage": 17.5
      },
      {
        "minute": "15-30",
        "count": 2,
        "percentage": 5
      },
   */
  scoring_minutes: [
    {
      period: [
        {
          minute: string;
          count: number;
          percentage: number;
        }
      ]
    }
  ],
  /**
   * 15分のうちに失点した数とその確率
   */
  goals_conceded_minutes: [
    {
      period: [
        {
          minute: string;
          count: number;
          percentage: number;
        },
      ]
    }
  ],
  /**
   * 1試合あたりの平均ゴール
   */
  avg_goals_per_game_scored: {
    total: number;
    home: number;
    away: number;
  },
  /**
   * 1試合あたりの平均失点
   */
  avg_goals_per_game_conceded: {
    total: number;
    home: number;
    away: number;
  },
  /**
   * 平均ファースト得点
   */
  avg_first_goal_scored: {
    total: string;
    home: string;
    away: string;
  },
  /**
   * 平均ファースト失点
   */
  avg_first_goal_conceded: {
    total: string;
    home: string;
    away: string;
  },
  /**
   * 攻撃の合計数
   */
  attacks: number;
   /**
    * 危険な攻撃の合計数
    */
  dangerous_attacks: number;
  /**
   * 平均支配率
   */
  avg_ball_possession_percentage: string;
  /**
   * ファウルの数
   */
  fouls: number;
  /**
   * 1試合あたりのファウル数
   */
  avg_fouls_per_game: string;
  offsides: number;
  /**
   * レッドカードの数
   */
  redcards: number;
  /**
   * イエローカードの数
   */
  yellowcards: number;
  shots_blocked: number;
  shots_off_target: number;
  avg_shots_off_target_per_game: string;
  shots_on_target: number;
  avg_shots_on_target_per_game: string;
  avg_corners: string;
  total_corners: number;
  btts: number;
  goal_line: {
    over: {
      0_5: {
        home: number;
        away: number;
      },
      1_5: {
        home: number;
        away: number;
      },
      2_5: {
        home: number;
        away: number;
      },
      3_5: {
        home: number;
        away: number;
      },
      4_5: {
        home: number;
        away: number;
      },
      5_5: {
        home: number;
        away: number;
      }
    },
    under: {
      0_5: {
        home: number;
        away: number;
      },
      1_5: {
        home: number;
        away: number;
      },
      2_5: {
        home: number;
        away: number;
      },
      3_5: {
        home: number;
        away: number;
      },
      4_5: {
        home: number;
        away: number;
      },
      5_5: {
        home: number;
        away: number;
      }
    }
  },
  /**
   * プレーヤーの平均レーティング
   */
  avg_player_rating: number;
  /**
   * １試合あたりのプレーヤーの平均レーティング
   */
  avg_player_rating_per_match: number;
  tackles: number;
}
