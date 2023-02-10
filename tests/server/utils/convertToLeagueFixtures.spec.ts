import { describe, test, expect } from 'vitest';
import { convertToLeagueFixtures } from '@@/src/server/utils/convertToLeagueFixtures';
import type { GetFixturesByData } from '@@/src/types/response_types/GetFixturesByData';

describe('convertToLeagueFixtures', () => {
  test('期待する値に変換されること', () => {
    const convertedData = convertToLeagueFixtures(apiData);
    expect(1 + 1).toEqual(2);
    expect(convertedData).toMatchObject(
      [
        {
          league_id: 8,
          league_name: 'Premier League',
          fixtures: [
            {
              local_team: {
                logo_path: 'https://cdn.sportmonks.com/images/soccer/teams/1/33.png',
                name: 'Norwich City'
              },
              visitor_team: {
                logo_path: 'https://cdn.sportmonks.com/images/soccer/teams/19/51.png',
                name: 'Crystal Palace'
              },
              scores: {
                localteam_score: 1,
                visitorteam_score: 1
              }
            }
          ]
        },
        {
          league_id: 564,
          league_name: 'La Liga',
          fixtures: [
            {
              local_team: {
                logo_path: 'https://cdn.sportmonks.com/images/soccer/teams/11/1099.png',
                name: 'Elche'
              },
              visitor_team: {
                logo_path: 'https://cdn.sportmonks.com/images/soccer/teams/31/2975.png',
                name: 'Deportivo Alavés'
              },
              scores: {
                localteam_score: 3,
                visitorteam_score: 1
              }
            }
          ]
        }
      ]
    );
  });
});

const apiData: GetFixturesByData = [
  {
    id: 18140175,
    league_id: 8,
    season_id: 18378,
    stage_id: 77453700,
    round_id: 247607,
    group_id: null,
    aggregate_id: null,
    venue_id: 489,
    referee_id: 15294,
    localteam_id: 33,
    visitorteam_id: 51,
    winner_team_id: null,
    weather_report: {
      code: 'clouds',
      type: 'overcast clouds',
      icon: 'https://cdn.sportmonks.com/images/weather/04n.png',
      temperature: {
        temp: 46.18,
        unit: 'fahrenheit'
      },
      temperature_celcius: {
        temp: 7.9,
        unit: 'celcius'
      },
      clouds: '100%',
      humidity: '92%',
      pressure: 1021,
      wind: {
        speed: '2.3 m/s',
        degree: 220
      },
      coordinates: {
        lat: 52.6278,
        lon: 1.2983
      },
      updated_at: '2022-02-09T21:00:11.710982Z'
    },
    commentaries: true,
    attendance: null,
    pitch: null,
    details: null,
    neutral_venue: false,
    winning_odds_calculated: true,
    formations: {
      localteam_formation: '4-4-2',
      visitorteam_formation: '4-3-3'
    },
    scores: {
      localteam_score: 1,
      visitorteam_score: 1,
      localteam_pen_score: null,
      visitorteam_pen_score: null,
      ht_score: '1-0',
      ft_score: '1-1',
      et_score: null,
      ps_score: null
    },
    time: {
      status: 'FT',
      starting_at: {
        date_time: '2022-02-09 19:45:00',
        date: '2022-02-09',
        time: '19:45:00',
        timestamp: 1644435900,
        timezone: 'UTC'
      },
      minute: 90,
      second: null,
      added_time: null,
      extra_minute: null,
      injury_time: null
    },
    coaches: {
      localteam_coach_id: 524237,
      visitorteam_coach_id: 460451
    },
    standings: {
      localteam_position: 18,
      visitorteam_position: 13
    },
    assistants: {
      first_assistant_id: 12083,
      second_assistant_id: 12025,
      fourth_official_id: 14533
    },
    leg: '1/1',
    colors: {
      localteam: {
        color: '#FFDF1B',
        kit_colors: '#FBED32,#FBED32,#FBED32,#FBED32,#999999,#888888,#316F37'
      },
      visitorteam: {
        color: '#0046A8',
        kit_colors: '#C40010,#0046A8,#C40010,#0046A8,#999999,#888888,#0046A8'
      }
    },
    deleted: false,
    is_placeholder: false,
    localTeam: {
      data: {
        id: 33,
        legacy_id: 394,
        name: 'Norwich City',
        short_code: 'NOR',
        twitter: '@NorwichCityFC',
        country_id: 462,
        national_team: false,
        founded: 1902,
        logo_path: 'https://cdn.sportmonks.com/images/soccer/teams/1/33.png',
        venue_id: 489,
        current_season_id: 19793,
        is_placeholder: false
      }
    },
    visitorTeam: {
      data: {
        id: 51,
        legacy_id: 381,
        name: 'Crystal Palace',
        short_code: 'CRY',
        twitter: '@CPFC',
        country_id: 462,
        national_team: false,
        founded: 1905,
        logo_path: 'https://cdn.sportmonks.com/images/soccer/teams/19/51.png',
        venue_id: 201,
        current_season_id: 19734,
        is_placeholder: false
      }
    },
    league: {
      data: {
        id: 8,
        active: true,
        type: 'domestic',
        legacy_id: 29,
        country_id: 462,
        logo_path: 'https://cdn.sportmonks.com/images/soccer/leagues/8/8.png',
        name: 'Premier League',
        is_cup: false,
        is_friendly: false,
        current_season_id: 19734,
        current_round_id: 274675,
        current_stage_id: 77457864,
        live_standings: true,
        coverage: {
          predictions: true,
          topscorer_goals: true,
          topscorer_assists: true,
          topscorer_cards: true
        }
      }
    }
  },
  {
    id: 18165942,
    league_id: 564,
    season_id: 18462,
    stage_id: 77454016,
    round_id: 250038,
    group_id: null,
    aggregate_id: null,
    venue_id: 430,
    referee_id: 15906,
    localteam_id: 1099,
    visitorteam_id: 2975,
    winner_team_id: 1099,
    weather_report: {
      code: 'clouds',
      type: 'few clouds',
      icon: 'https://cdn.sportmonks.com/images/weather/02d.png',
      temperature: {
        temp: 60.19,
        unit: 'fahrenheit'
      },
      temperature_celcius: {
        temp: 15.7,
        unit: 'celcius'
      },
      clouds: '20%',
      humidity: '71%',
      pressure: 1023,
      wind: {
        speed: '5.99 m/s',
        degree: 15
      },
      coordinates: {
        lat: 38.2622,
        lon: -0.7011
      },
      updated_at: '2022-02-05T14:45:11.716453Z'
    },
    commentaries: true,
    attendance: null,
    pitch: null,
    details: null,
    neutral_venue: false,
    winning_odds_calculated: true,
    formations: {
      localteam_formation: '4-4-2',
      visitorteam_formation: '4-4-2'
    },
    scores: {
      localteam_score: 3,
      visitorteam_score: 1,
      localteam_pen_score: null,
      visitorteam_pen_score: null,
      ht_score: '0-1',
      ft_score: '3-1',
      et_score: null,
      ps_score: null
    },
    time: {
      status: 'FT',
      starting_at: {
        date_time: '2022-02-05 13:00:00',
        date: '2022-02-05',
        time: '13:00:00',
        timestamp: 1644066000,
        timezone: 'UTC'
      },
      minute: 90,
      second: null,
      added_time: null,
      extra_minute: null,
      injury_time: null
    },
    coaches: {
      localteam_coach_id: 464975,
      visitorteam_coach_id: 523931
    },
    standings: {
      localteam_position: 16,
      visitorteam_position: 19
    },
    assistants: {
      first_assistant_id: 15908,
      second_assistant_id: 12132,
      fourth_official_id: 19071
    },
    leg: '1/1',
    colors: {
      localteam: {
        color: '#F0F0F0',
        kit_colors: '#F0F0F0,#F0F0F0,#007848,#F0F0F0,#C40010,#0046A8,#F0F0F0'
      },
      visitorteam: {
        color: '#0046A8',
        kit_colors: '#0046A8,#0046A8,#0046A8,#0046A8,#C40010,#0046A8,#0A0A0A'
      }
    },
    deleted: false,
    is_placeholder: false,
    localTeam: {
      data: {
        id: 1099,
        legacy_id: 297,
        name: 'Elche',
        short_code: 'ELC',
        twitter: '',
        country_id: 32,
        national_team: false,
        founded: 1923,
        logo_path: 'https://cdn.sportmonks.com/images/soccer/teams/11/1099.png',
        venue_id: 430,
        current_season_id: 19799,
        is_placeholder: false
      }
    },
    visitorTeam: {
      data: {
        id: 2975,
        legacy_id: 313,
        name: 'Deportivo Alavés',
        short_code: 'ALV',
        twitter: '@Alaves',
        country_id: 32,
        national_team: false,
        founded: 1921,
        logo_path: 'https://cdn.sportmonks.com/images/soccer/teams/31/2975.png',
        venue_id: 1747,
        current_season_id: 19800,
        is_placeholder: false
      }
    },
    league: {
      data: {
        id: 564,
        active: true,
        type: 'domestic',
        legacy_id: 19,
        country_id: 32,
        logo_path: 'https://cdn.sportmonks.com/images/soccer/leagues/564.png',
        name: 'La Liga',
        is_cup: false,
        is_friendly: false,
        current_season_id: 19799,
        current_round_id: 275903,
        current_stage_id: 77458033,
        live_standings: true,
        coverage: {
          predictions: true,
          topscorer_goals: true,
          topscorer_assists: true,
          topscorer_cards: true
        }
      }
    }
  }
];
