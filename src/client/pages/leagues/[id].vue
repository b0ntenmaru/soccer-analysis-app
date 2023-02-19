<script setup lang="ts">
import { League } from '@@/src/types/sportmonks_entity/League';

definePageMeta({
  layout: 'home'
});

const leagueId = ref(Number(useRoute().params.id));
const league = ref<League | null>(null);
const selectedSeasonId = ref<number | null>(null);
const seasons = ref<Array<{ id: number; name: string;}> | null>(null);

const { pending } = await useAsyncData(
  'league',
  () => $fetch(`/api/v1/leagues/${leagueId.value}`).then((data) => {
    league.value = data;
    selectedSeasonId.value = league.value.current_season_id;
    seasons.value = league.value.seasons.data.map((season) => {
      return {
        id: season.id,
        name: season.name
      };
    }).reverse();
    return data;
  }),
  { lazy: true, watch: [leagueId] }
);
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

      <v-card style="margin-bottom: 16px;">
        ああああ
        ああああ
        ああああ
        ああああ
        ああああ
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
