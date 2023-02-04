<script setup lang="ts">
const leagueId = useRoute().params.id;
const { data: league } = await useFetch(`/api/v1/leagues/${leagueId}`);

const latestSeason = computed(() => {
  if (league.value === null) { return; }
  if (league.value.seasons === undefined) { return; }

  return league.value.seasons.data.find(season => season.is_current_season === true);
});

const selectedSeasonId = ref<number | undefined>(latestSeason.value?.id);
</script>

<template>
  <div>
    <StandingsTable v-if="selectedSeasonId" :season-id="selectedSeasonId" />
  </div>
</template>

<style scoped>
.league-details {
  gap: 40px;
}
.section-card-container {
  margin-bottom: 14px;
}
</style>
