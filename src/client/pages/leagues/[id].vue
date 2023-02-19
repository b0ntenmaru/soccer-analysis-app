<script setup lang="ts">
definePageMeta({
  layout: 'home'
});

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
</script>

<template>
  <v-row v-if="league" justify-md="center" style="margin-top: 5px;">
    <v-col cols="12" md="4">
      <v-card style="margin-bottom: 16px;">
        <div class="league-profile">
          <v-avatar size="150" cover rounded>
            <v-img
              :src="league.logo_path"
              :alt="`${league.logo_path}のロゴ`"
            />
          </v-avatar>
        </div>

        <div class="season-selecter">
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
        </div>
      </v-card>

      <v-card style="margin-bottom: 16px;">
        ああああ
        ああああ
        ああああ
        ああああ
        ああああ
      </v-card>
    </v-col>

    <v-col cols="12" md="8">
      <v-card title="順位表">
        <StandingsTable v-if="selectedSeasonId" :season-id="selectedSeasonId" />
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
div.league-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;
}

div.season-selecter {
  padding: 3px 100px;
}
</style>
