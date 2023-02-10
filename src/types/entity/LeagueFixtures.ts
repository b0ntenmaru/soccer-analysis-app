
type Fixture = {
  local_team: {
    logo_path: string;
    name: string;
  };
  visitor_team: {
    logo_path: string;
    name: string;
  };
  scores: {
    localteam_score: number;
    visitorteam_score: number;
  };
  time: {
    status: string;
    starting_at: {
      date_time: string;
      date: string;
      time: string;
      timezone: string;
    };
  };
}

export type LeagueFixture = {
  league_id: number;
  league_name: string;
  league_logo_path: string;
  fixtures: Array<Fixture>;
}

export type LeagueFixtures = Array<LeagueFixture>;
