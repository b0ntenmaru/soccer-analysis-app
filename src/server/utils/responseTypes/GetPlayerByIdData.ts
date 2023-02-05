
type GetPlayerByIdData = {
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
    data: CountryData;
  },
  position: {
    data: {
      id: number;
      name: string;
    }
  }
}
