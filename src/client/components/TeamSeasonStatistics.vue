<script setup lang="ts">
type Props = {
  teamId: number;
  seasonId: number;
};
const props = defineProps<Props>();
const { data: teamSeasonStats } = await useFetch(
  `/api/v1/teams/${props.teamId}/season_stats/${props.seasonId}`,
  { lazy: true }
);
</script>

<template>
  <div v-for="stats in teamSeasonStats" :key="stats.stage_id">
    <h1>シーズンスタッツ</h1>
    {{ stats }}
  </div>
</template>

<style lang="scss" scoped>
.winning-progress {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
