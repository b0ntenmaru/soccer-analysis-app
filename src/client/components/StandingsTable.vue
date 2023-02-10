<script setup lang="ts">
type Props = {
  seasonId: number;
}
const props = defineProps<Props>();
const { data: seasonStandingsData } = await useFetch(`/api/v1/standings/season/${props.seasonId}`, { lazy: true });

watch(() => props.seasonId, async () => {
  const { data } = await useFetch(`/api/v1/standings/season/${props.seasonId}`, { lazy: true });
  seasonStandingsData.value = data.value;
});
</script>

<template>
  <div v-for="seasonStandings in seasonStandingsData" :key="seasonStandings.id">
    {{ seasonStandings }}
  </div>
</template>

<style lang="scss">
</style>
