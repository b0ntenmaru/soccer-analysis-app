import { Season } from '@@/src/types/sportmonks_entity/Season';

export const useLeagueDetail = () => {
  const leagueId = useRoute().params.id;
  const selectedSeasonId = ref<number | null>(null);
  const seasons = ref<Array<{ id: number; name: string;}> | null>(null);

  const { data: league, pending: leaguePending } = useAsyncData(
  `league-${leagueId}`,
  () => $fetch(`/api/v1/leagues/${leagueId}`).then((data) => {
    selectedSeasonId.value = data.current_season_id;
    seasons.value = generateSeason(data.seasons.data);
    return data;
  }),
  {
    lazy: true
  }
  );

  const { data: seasonStats, pending: seasonStatsPending } = useAsyncData(
  `season-stats-${leagueId}`,
  () => $fetch(`/api/v1/seasons/${selectedSeasonId.value}`),
  {
    immediate: false,
    lazy: true,
    watch: [selectedSeasonId]
  }
  );

  const { data: seasonStandingsData, pending: seasonStandingsDataPending } = useAsyncData(
    'season-standings',
    () => $fetch(`/api/v1/standings/season/${selectedSeasonId.value}`),
    {
      lazy: true,
      immediate: false,
      watch: [selectedSeasonId]
    }
  );

  const generateSeason = (seasons: Array<Season>) => {
    return seasons.map((season) => {
      return {
        id: season.id,
        name: season.name
      };
    }).reverse();
  };

  return {
    selectedSeasonId,
    seasons,
    league,
    leaguePending,
    seasonStats,
    seasonStatsPending,
    seasonStandingsData,
    seasonStandingsDataPending
  };
};
