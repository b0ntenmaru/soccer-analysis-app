import type { Country } from '@@/src/types/sportmonks_entity/Country';
import type { Coach } from '@@/src/types/sportmonks_entity/Coach';
import type { Squad } from '@@/src/types/sportmonks_entity/Squad';

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
  country?: {
    data: Country
  };
  squad?: {
    data: Array<Squad>;
  };
  coach?: {
    data: Coach
  }
}
