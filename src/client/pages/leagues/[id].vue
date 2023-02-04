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
  <a-row type="flex" class="league-details">
    <a-col :flex="3">
      <SectionCard class="section-card-container">
        <StandingsTable v-if="selectedSeasonId" :season-id="selectedSeasonId" />
      </SectionCard>
    </a-col>

    <a-col :flex="4">
      <SectionCard class="section-card-container">
        2 / 5
      </SectionCard>

      <SectionCard class="section-card-container">
        2 / 5
      </SectionCard>
    </a-col>
  </a-row>
</template>

<style scoped>
.league-details {
  gap: 40px;
}
.section-card-container {
  margin-bottom: 14px;
}
</style>
