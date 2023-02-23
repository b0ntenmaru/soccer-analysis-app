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
  return seasonStats.value?.assistscorers.data;
});

type SelectedTopPlayerRankingType = 'goal' | 'assist';

const selectedTopPlayerRanking = ref<SelectedTopPlayerRankingType>('goal');

const handleChangeSelectedTopPlayerRanking = (type: SelectedTopPlayerRankingType) => {
  selectedTopPlayerRanking.value = type;
};
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
            <h1 style="font-size: 18px; padding: 8px 14px 0;">
              トップ選手
            </h1>

            <div class="buttons">
              <v-btn variant="tonal" size="small" :active="selectedTopPlayerRanking === 'goal'" @click="handleChangeSelectedTopPlayerRanking('goal')">
                ゴール
              </v-btn>
              <v-btn variant="tonal" size="small" :active="selectedTopPlayerRanking === 'assist'" @click="handleChangeSelectedTopPlayerRanking('assist')">
                アシスト
              </v-btn>
            </div>

            <div v-show="selectedTopPlayerRanking === 'goal'">
              <PlayerRanking v-if="topGoalScorers" :top-players="topGoalScorers" type="goal" />
            </div>

            <div v-show="selectedTopPlayerRanking === 'assist'">
              <PlayerRanking v-if="topAssistScorers" :top-players="topAssistScorers" type="assist" />
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="8">
          <v-card :loading="seasonStandingsDataPending">
            <h1 style="font-size: 18px; padding: 8px 14px 0;">
              順位表
            </h1>
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

.buttons {
  padding: 8px 14px 0;
  display: flex;
  gap: 6px;
}
</style>
