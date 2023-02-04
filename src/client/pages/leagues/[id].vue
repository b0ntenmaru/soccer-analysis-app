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
  <div v-if="league">
    {{ league }}
  </div>
</template>

<style lang="scss" scoped>
</style>
