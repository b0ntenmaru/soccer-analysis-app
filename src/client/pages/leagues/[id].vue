<script setup lang="ts">
const leagueId = useRoute().params.id;
const { data: league } = await useFetch(`/api/v1/leagues/${leagueId}`);

const latestSeason = computed(() => {
  if (league.value === null) { return; }
  return league.value.seasons.data.find(season => season.is_current_season === true);
});

const selectedSeasonId = ref<number | undefined>(latestSeason.value?.id);

const seasons = league.value?.seasons?.data.map((season) => {
  return {
    id: season.id,
    name: season.name
  };
}).reverse();

const tab = ref();
</script>

<template>
  <v-select
    v-model="selectedSeasonId"
    label="シーズン"
    :items="seasons"
    item-title="name"
    item-value="id"
    density="compact"
    width="140"
    variant="underlined"
  />
  {{ league }}
</template>
