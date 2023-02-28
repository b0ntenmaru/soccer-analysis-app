<script setup lang="ts">
import type { GetSeasonStatsByIdData } from 'src/types/response_types/GetSeasonStatsByIdData';
import type { SeasonStandings } from 'src/types/sportmonks_entity/Standings';

type Props = {
  seasonStats: GetSeasonStatsByIdData
  seasonStandingsData: Array<SeasonStandings>;
};

const props = defineProps<Props>();

type SelectedTopPlayerRankingType = 'goal' | 'assist';
const selectedTopPlayerRanking = ref<SelectedTopPlayerRankingType>('goal');

const handleChangeSelectedTopPlayerRanking = (type: SelectedTopPlayerRankingType) => {
  selectedTopPlayerRanking.value = type;
};

const aggregatedGoalScorers = computed(() => {
  return props.seasonStats.aggregatedGoalscorers.data;
});

const aggregatedAssistScorers = computed(() => {
  return props.seasonStats.aggregatedAssistscorers.data;
});
</script>

<template>
  <v-row justify-md="center">
    <v-col cols="12" md="4">
      <SectionVSheet style="margin-bottom: 16px;">
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
          <PlayerRanking v-if="aggregatedGoalScorers" :top-players="aggregatedGoalScorers" type="goal" />
        </div>

        <div v-show="selectedTopPlayerRanking === 'assist'">
          <PlayerRanking v-if="aggregatedAssistScorers" :top-players="aggregatedAssistScorers" type="assist" />
        </div>
      </SectionVSheet>
    </v-col>

    <v-col cols="12" md="8">
      <SectionVSheet>
        <h1 style="font-size: 18px; padding: 8px 14px 0;">
          順位表
        </h1>
        <StandingsTable :season-standings-data="seasonStandingsData" />
      </SectionVSheet>
    </v-col>
  </v-row>
</template>

<style scoped>
.buttons {
  padding: 8px 14px 0;
  display: flex;
  gap: 6px;
}
</style>
