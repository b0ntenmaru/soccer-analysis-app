
type Season = {
  id: number;
  year: number;
};

type League = {
  name: string;
  country: string;
  league_name: string;
  season: Array<Season>;
};

export type LeagueListData = Array<League>
