export type Country = {
  id: number;
  name: string;
  image_path: string;
  extra: {
    continent: string;
    sub_region: string;
    world_region: string;
    fifa: string;
    iso: string;
    iso2: string;
    longitude: number;
    latitude: number;
    flag: string;
  }
}
