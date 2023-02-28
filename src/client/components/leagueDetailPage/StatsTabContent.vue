<script setup lang="ts">
import type { Stats } from '@@/src/types/response_types/GetSeasonStatsByIdData';

type Props = {
  seasonStats: Stats;
};
const props = defineProps<Props>();

const seasonProgressPercentage = computed(() => {
  return (props.seasonStats.number_of_matches_played / props.seasonStats.number_of_matches) * 100;
});
</script>

<template>
  <v-row>
    <!-- 進捗 -->
    <v-col cols="12" md="4">
      <StatsDescription>
        <template #title>
          進捗
        </template>
        <template #content>
          <div class="stats-number-of-matches-played">
            <div>
              <v-progress-circular
                color="primary"
                :model-value="seasonProgressPercentage"
                :size="60"
                :width="6"
              />
            </div>
            <div class="matches">
              <span style="font-size: 40px; font-weight: bold;">
                {{ seasonStats.number_of_matches_played }}
              </span>
              <span class="number-of-matches">
                / {{ seasonStats.number_of_matches }}
              </span>
            </div>
          </div>
          <div style="width: 90%; text-align: right; font-size: 14px; margin-top: -6px; color: #5f5f5f">
            試合が終了
          </div>
        </template>
      </StatsDescription>
    </v-col>

    <!-- ゴール -->
    <v-col cols="12" md="4">
      <StatsDescription>
        <template #title>
          ゴール
        </template>
        <template #content>
          <StatsDescriptionContent>
            <template #left-main>
              {{ props.seasonStats.number_of_goals }}
            </template>
            <template #left-sub>
              総得点数
            </template>
            <template #right-main>
              {{ props.seasonStats.avg_goals_per_match }}
            </template>
            <template #right-sub>
              1試合の平均得点数
            </template>
          </StatsDescriptionContent>
        </template>
      </StatsDescription>
    </v-col>

    <!-- 得点する時間帯 -->
    <v-col cols="12" md="4">
      <StatsDescription>
        <template #title>
          得点する時間帯
        </template>
        <template #content>
          あああ
        </template>
      </StatsDescription>
    </v-col>

    <!-- イエローカード -->
    <v-col cols="12" md="4">
      <StatsDescription>
        <template #title>
          イエローカード
        </template>

        <template #content>
          <StatsDescriptionContent>
            <template #left-main>
              {{ props.seasonStats.number_of_yellowcards }}
            </template>
            <template #left-sub>
              総数
            </template>
            <template #right-main>
              {{ props.seasonStats.avg_yellowcards_per_match }}
            </template>
            <template #right-sub>
              1試合の平均枚数
            </template>
          </StatsDescriptionContent>
        </template>
      </StatsDescription>
    </v-col>

    <!-- 退場のきっかけとなる2枚目のイエローカード -->
    <v-col cols="12" md="4">
      <StatsDescription>
        <template #title>
          退場のきっかけとなる2枚目のイエローカード
        </template>

        <template #content>
          <StatsDescriptionContent>
            <template #left-main>
              {{ props.seasonStats.number_of_yellowredcards }}
            </template>
            <template #left-sub>
              総数
            </template>
            <template #right-main>
              {{ props.seasonStats.avg_yellowredcards_per_match }}
            </template>
            <template #right-sub>
              1試合の平均枚数
            </template>
          </StatsDescriptionContent>
        </template>
      </StatsDescription>
    </v-col>

    <!-- レッドカード -->
    <v-col cols="12" md="4">
      <StatsDescription>
        <template #title>
          レッドカード
        </template>

        <template #content>
          <StatsDescriptionContent>
            <template #left-main>
              {{ props.seasonStats.number_of_redcards }}
            </template>
            <template #left-sub>
              総数
            </template>
            <template #right-main>
              {{ props.seasonStats.avg_redcards_per_match }}
            </template>
            <template #right-sub>
              1試合の平均枚数
            </template>
          </StatsDescriptionContent>
        </template>
      </StatsDescription>
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
