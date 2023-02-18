import { GetAllLeaguesByTeamIdData } from './getAllLeaguesByTeamId';

export const convertToLeagueSeasons = (data: GetAllLeaguesByTeamIdData): Array<LeagueSeasons> => {
  const dto: Array<LeagueSeasons> = [];

  data.forEach((d) => {
    if (d.league === undefined) { return; }

    if (dto.some(dtoObj => dtoObj.leagueId === d.league?.data.id)) {
      // 既にdtoの中にリーグが存在していたら対象のリーグ内にシーズンを追加
      const index = dto.findIndex(dtoObj => dtoObj.leagueId === d.league?.data.id);
      dto[index].seasons.push({ id: d.id, name: d.name });
    } else {
      // まだdtoの中にリーグが存在していなければリーグを新規作成して追加
      dto.push({
        leagueId: d.league.data.id,
        leagueName: d.league.data.name,
        leaguetype: d.league.data.type,
        seasons: [
          {
            id: d.id,
            name: d.name
          }
        ]
      });
    }
  });
  return dto;
};

type LeagueSeasons = {
  leagueId?: number;
  leagueName?: string;
  leaguetype: 'cup_international' | 'domestic_cup' | 'domestic';
  seasons: Array<{ id: number; name: string;}>
}
