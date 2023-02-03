<script setup lang="ts">
type Props = {
  seasonId: number;
}
const props = defineProps<Props>();
const { data: seasonStandingsData } = await useFetch(`/api/v1/standings/season/${props.seasonId}`);

watch(() => props.seasonId, async () => {
  const { data } = await useFetch(`/api/v1/standings/season/${props.seasonId}`);
  seasonStandingsData.value = data.value;
});
</script>

<template>
  <div>
    <div v-for="seasonStandingsDataItem in seasonStandingsData" :key="seasonStandingsDataItem.id" class="standings">
      <h1>{{ seasonStandingsDataItem.name }}</h1>
      <StandingsTableListItem :season-standings-data-item="seasonStandingsDataItem" />
    </div>
  </div>
</template>

<style scoped>
div.standings {
  margin-bottom: 30px;
}
</style>
