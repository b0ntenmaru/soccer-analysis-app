import type { League } from './League';
import type { Country } from '@@/src/types/sportmonks_entity/Country';
import type { Coach } from '@@/src/types/sportmonks_entity/Coach';
import type { Squad } from '@@/src/types/sportmonks_entity/Squad';
import type { TeamStatsData } from '@@/src/types/sportmonks_entity/TeamStats';
import type { Season } from '@@/src/types/sportmonks_entity/Season';

export type Team = {
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
    data: Country
  };
  squad?: {
    data: Array<Squad>;
  };
  coach?: {
    data: Coach;
  };
  stats?: {
    data: TeamStatsData;
  },
  activeSeasons?: {
    data: Array<Season>;
  },
  trophies?: {
    data: Array<Trophie>;
  },
  league?: {
    data: League
  }
}

type Trophie = {
  team_id: number;
  status: string;
  times: number,
  league: string;
  logo_path: string;
  league_id: number;
  non_sportmonk_seasons: Array<{name: string}>;
  seasons: {
    data: Array<{id: number; name: string;}>
  }
};
