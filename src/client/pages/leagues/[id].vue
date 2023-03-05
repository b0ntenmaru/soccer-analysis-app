<script setup lang="ts">
import SeasonStats from '~~/src/client/components/leagueDetailPage/SeasonStats.vue';

definePageMeta({
  layout: 'home'
});

const {
  selectedSeasonId,
  seasons,
  league,
  seasonStats,
  seasonStatsPending,
  seasonStandingsData,
  seasonStandingsDataPending
} = useLeagueDetail();

const seasonProgress = computed(() => {
  if (seasonStats.value === null) { return; }

  const statsData = seasonStats.value.stats.data;
  return (statsData.number_of_matches_played / statsData.number_of_matches) * 100;
});

type SelectedTopPlayerRankingType = 'goal' | 'assist';
const selectedTopPlayerRanking = ref<SelectedTopPlayerRankingType>('goal');

const handleChangeSelectedTopPlayerRanking = (type: SelectedTopPlayerRankingType) => {
  selectedTopPlayerRanking.value = type;
};

const aggregatedGoalScorers = computed(() => {
  if (seasonStats.value === null) { return; }

  return seasonStats.value.aggregatedGoalscorers.data;
});

const aggregatedAssistScorers = computed(() => {
  if (seasonStats.value === null) { return; }

  return seasonStats.value.aggregatedAssistscorers.data;
});

const tab = ref('summary');
const items = [
  'summary', 'stats'
];
</script>

<template>
  <div v-if="seasonStatsPending && seasonStandingsDataPending" class="loading">
    <v-progress-circular
      color="primary"
      indeterminate
      :size="128"
      :width="8"
    />
  </div>
  <template v-else>
    <v-row v-if="league && seasonStats && seasonStandingsData" justify-md="center" style="margin-top: 5px;">
      <v-col cols="12" md="12">
        <SectionVSheet style="margin-bottom: 16px;">
          <div class="league-profile-container">
            <div class="league-profile">
              <div class="league-profile-avatar">
                <v-avatar size="140" cover rounded>
                  <v-img
                    :src="league.logo_path"
                    :alt="`${league.name}のロゴ`"
                  />
                </v-avatar>
              </div>

              <div class="league-profile-sub">
                <div class="league-profile-country">
                  <v-avatar size="20" cover rounded>
                    <v-img
                      :src="league.country.data.image_path"
                      :alt="`${league.country.data.name}のロゴ`"
                    />
                  </v-avatar>
                  <span>{{ league.country.data.name }}</span>
                </div>
                <div class="season-progress">
                  シーズン進捗: {{ seasonStats.stats.data.number_of_matches_played }} / {{ seasonStats.stats.data.number_of_matches }} 試合終了
                </div>
                <v-progress-linear color="primary" :model-value="seasonProgress" :height="8" rounded />
              </div>
            </div>

            <div class="league-season-selecter">
              <v-select
                v-if="seasons"
                v-model="selectedSeasonId"
                label="シーズン"
                :items="seasons"
                item-title="name"
                item-value="id"
                density="compact"
                style="width: 140px; display: inline-block;"
              />
            </div>
          </div>

          <div>
            <v-tabs
              v-model="tab"
              color="primary"
              grow
            >
              <v-tab
                v-for="item in items"
                :key="item"
                :value="item"
              >
                {{ item }}
              </v-tab>
            </v-tabs>
          </div>
        </SectionVSheet>

        <div v-show="tab === 'summary'">
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
        </div>

        <div v-show="tab === 'stats'">
          <SeasonStats :season-stats="seasonStats" />
        </div>
      </v-col>
    </v-row>
  </template>
</template>

<style lang="scss" scoped>
.loading {
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

}

.buttons {
  padding: 8px 14px 0;
  display: flex;
  gap: 6px;
}

div.league-profile-container {
  display: flex;
  align-items: flex-end;
  gap: 14px;
  padding: 14px;
  justify-content: space-between;

  .league-profile {
    display: flex;
    gap: 6px;
    align-items: center;

    .league-profile-sub {
      display: flex;
      flex-direction: column;
      width: 226px;

      .league-profile-country {
        display: flex;
        align-items: center;
        font-weight: bold;
        gap: 6px;
      }

      .season-progress {
        font-size: 14px;
      }
    }
  }

  .league-season-selecter {
    text-align: center;
  }
}

@media (max-width:767px) {
  div.league-profile-container {
    flex-direction: column;
    align-items: center;

    .league-profile {
      flex-direction: column;
    }

    .league-season-selecter {
      width: 100%;
    }
  }
}
</style>
