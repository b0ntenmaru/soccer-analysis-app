<script setup lang="ts">
definePageMeta({
  layout: 'home'
});

const {
  selectedSeasonId,
  seasons,
  league,
  leaguePending,
  seasonStats,
  seasonStatsPending,
  seasonStandingsData,
  seasonStandingsDataPending
} = useLeagueDetail();

const topGoalScorers = computed(() => {
  return seasonStats.value?.goalscorers.data;
});

const topAssistScorers = computed(() => {
  return seasonStats.value?.assistscorers.data
})
</script>

<template>
  <v-row v-if="league" justify-md="center" style="margin-top: 5px;">
    <v-col cols="12" md="12">
      <v-card style="margin-bottom: 16px;" :loading="leaguePending">
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
            variant="underlined"
            :loading="leaguePending"
            style="width: 140px; display: inline-block;"
          />
        </div>
      </v-card>

      <v-row justify-md="center">
        <v-col cols="12" md="4">
          <v-card style="margin-bottom: 16px;" :loading="seasonStatsPending">
            <h1 style="font-size: 18px; padding: 8px 14px 0;">得点ランキング</h1>
            <PlayerRanking v-if="topGoalScorers" :top-players="topGoalScorers" type="goal" />
          </v-card>

          <v-card style="margin-bottom: 16px;" :loading="seasonStatsPending">
            <h1 style="font-size: 18px; padding: 8px 14px 0;">アシストランキング</h1>
            <PlayerRanking v-if="topAssistScorers" :top-players="topAssistScorers" type="assist" />
          </v-card>
        </v-col>

        <v-col cols="12" md="8">
          <v-card :loading="seasonStandingsDataPending">
            <h1 style="font-size: 18px; padding: 8px 14px 0;">順位表</h1>
            <StandingsTable v-if="seasonStandingsData" :season-standings-data="seasonStandingsData" />
          </v-card>
        </v-col>
      </v-row>
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
  text-align: center;
}
</style>
