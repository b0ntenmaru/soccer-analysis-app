<script setup lang="ts">
const id = useRoute().params.id;
const { data: team } = await useFetch(`/api/v1/teams/${id}`);
</script>

<template>
  <div v-if="team">
    <TeamProfile
      v-if="team.country"
      :logo-path="team.logo_path"
      :name="team.name"
      :country-image-path="team.country.data.image_path"
      :fifa-name="team.country.data.extra.fifa"
      :twitter="team.twitter"
    />

    <StandingsTable :season-id="team.current_season_id" />

    <TeamSeasonStatistics :team-id="team.id" :season-id="team.current_season_id" />
  </div>
</template>

<style scoped lang="scss">
</style>
