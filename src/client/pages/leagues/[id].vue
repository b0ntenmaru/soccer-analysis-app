<script setup lang="ts">
const leagueId = useRoute().params.id;
const { data: league } = await useFetch(`/api/v1/leagues/${leagueId}`);

const latestSeason = computed(() => {
  if (league.value === null) { return; }
  if (league.value.seasons === undefined) { return; }

  return league.value.seasons.data.find(season => season.is_current_season === true);
});

const selectedSeasonId = ref<number | undefined>(latestSeason.value?.id);

const seasons = league.value?.seasons.data.map((season) => {
  return {
    id: season.id,
    name: season.name
  };
}).reverse();

const tab = ref();
</script>

<template>
  <v-row justify-md="center">
    <v-col cols="12" md="10">
      <h1 style="margin-bottom: 8px; font-size: 16px; padding: 10px;">
        {{ league?.name }}
      </h1>
      <v-sheet rounded="lg" style="margin-bottom: 10px;" border>
        <div v-if="league">
          <header class="league-profile">
            <v-avatar size="120" cover rounded>
              <v-img
                :src="league.logo_path"
                :alt="`${league.name}のロゴ`"
              />
            </v-avatar>

            <div class="season-selector">
              <v-select
                v-model="selectedSeasonId"
                label="シーズン"
                :items="seasons"
                item-title="name"
                item-value="id"
                density="compact"
                width="140"
                variant="underlined"
                :style="{'display': 'inline-block'}"
              />
            </div>
            <v-tabs
              v-model="tab"
              color="deep-purple-accent-4"
              align-tabs="center"
            >
              <v-tab :value="1">
                概要
              </v-tab>
              <v-tab :value="2">
                日程・結果
              </v-tab>
              <v-tab :value="3">
                スタッツ
              </v-tab>
            </v-tabs>
          </header>
        </div>
      </v-sheet>

      <template v-if="tab === 1">
        <v-row justify-md="center">
          <v-col cols="12" md="4">
            <v-sheet rounded="lg" border>
              ああああ
            </v-sheet>
          </v-col>

          <v-col cols="12" md="8">
            <div>
              <StandingsTable v-if="selectedSeasonId" :season-id="selectedSeasonId" />
            </div>
          </v-col>
        </v-row>
      </template>

      <template v-else-if="tab === 2">
        日程・結果
      </template>
      <template v-else>
        スタッツ
      </template>
    </v-col>
  </v-row>
</template>

<style scoped>
.league-details {
  gap: 40px;
}
.section-card-container {
  margin-bottom: 14px;
}

.league-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
}
</style>
