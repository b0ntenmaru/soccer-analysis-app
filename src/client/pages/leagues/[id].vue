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
    <div class="league-wrapper">
      <v-card outlined elevation="4" class="league-profile" :style="`background-image: url(${league.logo_path})`">
        <div class="league-profile-content">
          <img :src="league.logo_path">
        </div>

        <div class="league-profile-content">
          <h1>{{ league.name }}</h1>
        </div>
      </v-card>

      <div>
        <StandingsTableList v-if="selectedSeasonId" :season-id="selectedSeasonId" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.league-wrapper {

  .league-profile {
    margin-bottom: 10px;
    display: flex;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 12px;
    background-color: #666666;
    position: relative;
    z-index: 0;
    gap: 25px;

    .league-profile-content {
      align-items: center;
      display: flex;
      color: white;
      text-shadow: 0 0 10px #333;

      img {
        background: #fff;
        border-radius: 12px;;
        width: 150px;
      }

      h1 {
        font-size: 44px;
      }

      &::before {
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        background: inherit;
        filter: blur(20px);
        z-index: -1;
      }
    }
  }
}
</style>
