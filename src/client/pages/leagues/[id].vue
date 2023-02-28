<script setup lang="ts">
import SummaryTabContent from '@@/src/client/components/leagueDetailPage/SummaryTabContent.vue';

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

const seasonProgress = computed(() => {
  if (seasonStats.value === null) { return; }

  const statsData = seasonStats.value.stats.data;
  return (statsData.number_of_matches_played / statsData.number_of_matches) * 100;
});

const route = useRoute();
const hash = route.hash as '#summary' | '#fixtures' | '#stats';

const tab = ref<'#summary' | '#fixtures' | '#stats'>(hash);
</script>

<template>
  <v-row v-if="league && seasonStats && seasonStandingsData" justify-md="center" style="margin-top: 5px;">
    <v-col cols="12" md="12">
      <SectionVSheet style="margin-bottom: 16px;">
        <div class="league-profile-container">
          <div class="league-profile">
            <div class="league-profile-avatar">
              <v-avatar size="100" cover rounded>
                <v-img
                  :src="league.logo_path"
                  :alt="`${league.logo_path}のロゴ`"
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
            color="deep-purple-accent-4"
            align-tabs="center"
            density="compact"
          >
            <v-tab href="#summary" value="#summary">
              サマリー
            </v-tab>
            <v-tab href="#fixtures" value="#fixtures">
              マッチ
            </v-tab>
            <v-tab href="#stats" value="#stats">
              データ
            </v-tab>
          </v-tabs>
        </div>
      </SectionVSheet>

      <v-window v-model="tab">
        <v-window-item value="#summary" href="#summary">
          <SummaryTabContent :season-stats="seasonStats" :season-standings-data="seasonStandingsData" />
        </v-window-item>

        <v-window-item value="#fixtures" href="#fixtures">
          マッチ
        </v-window-item>

        <v-window-item value="#stats" href="#stats">
          スタッツ
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
  <div v-else class="loading">
    <v-progress-circular
      color="primary"
      indeterminate
      :size="128"
      :width="8"
    />
  </div>
</template>

<style lang="scss" scoped>
.loading {
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

}

div.league-profile-container {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 14px;
  padding-bottom: 0;
  justify-content: space-between;

  .league-profile {
    display: flex;
    align-items: center;

    .league-profile-sub {
      display: flex;
      flex-direction: column;
      width: 250px;

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
    .league-season-selecter {
      width: 100%;
    }
  }
}
</style>
