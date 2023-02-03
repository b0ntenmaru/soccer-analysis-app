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
    <div v-for="seasonStandings in seasonStandingsData" :key="seasonStandings.id" class="standings">
      <v-card
        outlined
        elevation="4"
        class="standings-table-list-item"
      >
        <h3>{{ seasonStandings.name }}</h3>
        <StandingsTableListItem :season-standings="seasonStandings" />
      </v-card>
    </div>
  </div>
</template>

<style scoped>
div.standings {
  margin-bottom: 30px;
}

.standings-table-list-item {
  padding: 20px;
}
</style>
