import type { Country } from '@@/src/types/sportmonks_entity/Country';

export type Player = {
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
  country: {
    data: Country;
  },
  position?: Position;
}

type Position = {
  data: {
    id: number;
    name: string;
  }
};
