import type { GetFixturesByData } from '@@/src/types/response_types/GetFixturesByData';
import type { LeagueFixture, LeagueFixtures } from 'src/types/entity/LeagueFixtures';

import type { Fixture } from '@@/src/types/sportmonks_entity/Fixture';

/**
 * APIから渡ってきたFixtures（試合結果を表現するオブジェクト）をフロントエンド用に変換する
 */
export const convertToLeagueFixtures = (data: GetFixturesByData): LeagueFixtures => {
  const leagueFixtures: LeagueFixtures = [];

  data.forEach((fixture) => {
    if (leagueFixtures.some(leagueFixture => leagueFixture.league_id === fixture.league.data.id)) {
      const index = leagueFixtures.findIndex(leagueFixture => leagueFixture.league_id === fixture.league.data.id);
      leagueFixtures[index].fixtures.push(generateFixtureForFrontend(fixture));
    } else {
      const leagueFixture: LeagueFixture = generateLeagueFixture(fixture);

      leagueFixtures.push(leagueFixture);
    }
  });
  return leagueFixtures;
};

const generateFixtureForFrontend = (fixture: Fixture) => {
  return {
    local_team: {
      logo_path: fixture.localTeam.data.logo_path,
      name: fixture.localTeam.data.name
    },
    visitor_team: {
      logo_path: fixture.visitorTeam.data.logo_path,
      name: fixture.visitorTeam.data.name
    },
    scores: {
      localteam_score: fixture.scores.localteam_score,
      visitorteam_score: fixture.scores.visitorteam_score
    },
    time: {
      status: fixture.time.status,
      starting_at: {
        date_time: fixture.time.starting_at.date_time,
        date: fixture.time.starting_at.date,
        time: fixture.time.starting_at.time,
        timezone: fixture.time.starting_at.timezone
      }
    }
  };
};

const generateLeagueFixture = (fixture: Fixture) => {
  return {
    league_id: fixture.league.data.id,
    league_name: fixture.league.data.name,
    league_logo_path: fixture.league.data.logo_path,
    fixtures: [
      {
        local_team: {
          logo_path: fixture.localTeam.data.logo_path,
          name: fixture.localTeam.data.name
        },
        visitor_team: {
          logo_path: fixture.visitorTeam.data.logo_path,
          name: fixture.visitorTeam.data.name
        },
        scores: {
          localteam_score: fixture.scores.localteam_score,
          visitorteam_score: fixture.scores.visitorteam_score
        },
        time: {
          status: fixture.time.status,
          starting_at: {
            date_time: fixture.time.starting_at.date_time,
            date: fixture.time.starting_at.date,
            time: fixture.time.starting_at.time,
            timezone: fixture.time.starting_at.timezone
          }
        }
      }
    ]
  };
};
