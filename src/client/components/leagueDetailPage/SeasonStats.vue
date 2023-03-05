<script setup lang="ts">
import type { GetSeasonStatsByIdData } from '@@/src/types/response_types/GetSeasonStatsByIdData';

type Props = {
  seasonStats: GetSeasonStatsByIdData
};

const props = defineProps<Props>();

const seasonStats = computed(() => {
  return props.seasonStats.stats.data;
});

const seasonStatsItems = computed((): Array<{ label: string; data: string | number;}> => {
  return [
    {
      label: '総得点数',
      data: seasonStats.value.number_of_goals
    },
    {
      label: '1試合あたりの平均得点数',
      data: seasonStats.value.avg_goals_per_match
    },
    {
      label: '1試合あたりのホーム平均得点数',
      data: seasonStats.value.avg_homegoals_per_match
    },
    {
      label: '1試合あたりのアウェー平均得点数',
      data: seasonStats.value.avg_awaygoals_per_match
    },
    {
      label: '1得点にかかる時間',
      data: `${seasonStats.value.goal_scored_every_minutes}分`
    },
    {
      label: 'ホームチームの勝率',
      data: `${seasonStats.value.win_percentage.home}%`
    },
    {
      label: 'アウェーチームの勝率',
      data: `${seasonStats.value.win_percentage.away}%`
    },
    {
      label: '引き分け率',
      data: `${seasonStats.value.draw_percentage}%`
    },
    {
      label: 'イエローカードの総数',
      data: `${seasonStats.value.number_of_yellowcards}枚`
    },
    {
      label: '1試合あたりの平均イエローカード数',
      data: `${seasonStats.value.avg_yellowcards_per_match}枚`
    },
    {
      label: '退場のきっかけとなるイエローカードの数',
      data: `${seasonStats.value.number_of_yellowredcards}枚`
    },
    {
      label: '1試合あたりの退場のきっかけとなるイエローカード数の平均数',
      data: `${seasonStats.value.avg_yellowredcards_per_match}枚`
    },
    {
      label: 'レッドカードの総数',
      data: `${seasonStats.value.number_of_redcards}枚`
    },
    {
      label: '1試合あたりの平均レッドカード数',
      data: `${seasonStats.value.avg_redcards_per_match}枚`
    }
  ];
});
</script>

<template>
  <v-row justify-md="center">
    <v-col cols="12">
      <SectionVSheet>
        <div class="stats-description" style="padding: 8px;">
          <h1 style="font-size: 18px; margin-bottom: 12px;">
            リーグスタッツ
          </h1>

          <v-row justify="center">
            <v-col cols="12" md="12">
              <v-row>
                <v-col v-for="(statsItem, index) in seasonStatsItems" :key="index" cols="6" md="3">
                  <StatsDescriptionItem>
                    <template #stats-data>
                      {{ statsItem.data }}
                    </template>
                    <template #stats-name>
                      {{ statsItem.label }}
                    </template>
                  </StatsDescriptionItem>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </SectionVSheet>
    </v-col>
  </v-row>
</template>
