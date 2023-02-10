
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
}

export type LeagueFixture = {
  league_id: number;
  league_name: string;
  fixtures: Array<Fixture>;
}

export type LeagueFixtures = Array<LeagueFixture>;
