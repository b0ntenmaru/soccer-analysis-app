<script setup lang="ts">
import type { Stats } from '@@/src/types/response_types/GetSeasonStatsByIdData';

type Props = {
  seasonStats: Stats;
};
const props = defineProps<Props>();

const seasonProgressPercentage = computed(() => {
  const percentage = props.seasonStats.number_of_matches_played / props.seasonStats.number_of_matches * 100;
  return percentage;
});
</script>

<template>
  <v-row>
    <v-col cols="12">
      <SectionVSheet>
        <div class="stats-description" style="padding: 8px;">
          <h1 style="font-size: 18px; margin-bottom: 12px;">
            リーグスタッツ
          </h1>

          <v-row justify="center">
            <v-col cols="12" md="4">
              <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                <div>
                  <v-progress-circular
                    color="primary"
                    :model-value="seasonProgressPercentage"
                    :size="90"
                    :width="5"
                  />
                </div>

                <div style="display: flex; flex-direction: column;">
                  <div>
                    <span style="font-size: 30px; font-weight: bold;">
                      {{ seasonStats.number_of_matches_played }}
                    </span>
                    <span style="font-size: 20px; font-weight: bold;">
                      / {{ seasonStats.number_of_matches }}
                    </span>
                  </div>
                  <div style="font-size: 14px;">
                    試合が終了
                  </div>
                </div>
              </div>
            </v-col>

            <v-col cols="12" md="8">
              <v-row>
                <!-- 総得点数 -->
                <v-col cols="6" md="3">
                  <StatsDescriptionItem>
                    <template #stats-data>
                      {{ props.seasonStats.number_of_goals }}
                    </template>
                    <template #stats-name>
                      総得点数
                    </template>
                  </StatsDescriptionItem>
                </v-col>

                <!-- 1試合あたりの平均得点数 -->
                <v-col cols="6" md="3">
                  <StatsDescriptionItem>
                    <template #stats-data>
                      {{ props.seasonStats.avg_goals_per_match }}
                    </template>
                    <template #stats-name>
                      1試合あたりの平均得点数
                    </template>
                  </StatsDescriptionItem>
                </v-col>

                <!-- 1試合の平均得点/失点数 -->
                <v-col cols="6" md="3">
                  <StatsDescriptionItem>
                    <template #stats-data>
                      {{ props.seasonStats.goals_scored.all }}
                    </template>
                    <template #stats-name>
                      1試合の平均得点/失点数
                    </template>
                  </StatsDescriptionItem>

                  <!-- {{ props.seasonStats.win_percentage.all }}
                  {{ props.seasonStats.defeat_percentage.all }} -->
                  ---
                  {{ props.seasonStats.win_percentage.home }}
                  {{ props.seasonStats.defeat_percentage.home }}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </SectionVSheet>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.stats-number-of-matches-played {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.number-of-matches {
  font-size: 20px;
  font-weight: bold;
}
</style>
