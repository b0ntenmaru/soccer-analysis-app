<script setup lang="ts">
import { Season } from '@@/src/types/sportmonks_entity/Season';

definePageMeta({
  layout: 'home'
});

const leagueId = useRoute().params.id;
const selectedSeasonId = ref<number | null>(null);
const seasons = ref<Array<{ id: number; name: string;}> | null>(null);

const { data: league, pending } = useAsyncData(
  `league-${leagueId}`,
  () => $fetch(`/api/v1/leagues/${leagueId}`).then((data) => {
    selectedSeasonId.value = data.current_season_id;
    seasons.value = seasonGenerator(data.seasons.data);
    return data;
  }),
  {
    lazy: true
  }
);

const { data: seasonStats, pending: seasonStatsPending } = useAsyncData(
  `season-stats-${leagueId}`,
  () => $fetch(`/api/v1/seasons/${selectedSeasonId.value}`),
  {
    immediate: false,
    lazy: true,
    watch: [selectedSeasonId]
  }
);

const seasonGenerator = (seasons: Array<Season>) => {
  return seasons.map((season) => {
    return {
      id: season.id,
      name: season.name
    };
  }).reverse();
};
</script>

<template>
  <v-row v-if="league" justify-md="center" style="margin-top: 5px;">
    <v-col cols="12" md="4">
      <v-card style="margin-bottom: 16px;" :loading="pending">
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
            v-if="seasons"
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

      <v-card style="margin-bottom: 16px;" :loading="seasonStatsPending">
        {{ seasonStats }}
      </v-card>
    </v-col>

    <v-col cols="12" md="8">
      <StandingsTable v-if="selectedSeasonId" :season-id="selectedSeasonId" />
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
