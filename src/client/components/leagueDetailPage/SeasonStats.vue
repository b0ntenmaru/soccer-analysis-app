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

const mostGoalsTeam = computed(() => {
  if (seasonStats.value.mostgoalsteam === undefined) {
    return null;
  }
  return seasonStats.value.mostgoalsteam.data;
});

const mostConcededGoalsTeam = computed(() => {
  if (seasonStats.value.mostconcededgoalsteam === undefined) {
    return null;
  }
  return seasonStats.value.mostconcededgoalsteam.data;
});

const mostGoalsPerMatchTeam = computed(() => {
  if (seasonStats.value.mostgoalspermatchteam === undefined) {
    return null;
  }
  return seasonStats.value.mostgoalspermatchteam.data;
});

const mostCleanSheetsTeam = computed(() => {
  if (seasonStats.value.mostcleansheetsteam === undefined) {
    return null;
  }
  return seasonStats.value.mostcleansheetsteam.data;
});

const mostCornersTeam = computed(() => {
  if (seasonStats.value.mostcornersteam === undefined) {
    return null;
  }
  return seasonStats.value.mostcornersteam.data;
});

const topScorer = computed(() => {
  if (seasonStats.value.topscorer === undefined) {
    return null;
  }
  return seasonStats.value.topscorer.data;
});

const assistTopScorer = computed(() => {
  if (seasonStats.value.assisttopscorer === undefined) {
    return null;
  }
  return seasonStats.value.assisttopscorer.data;
});

const mostCleanSheetsGoalkeeper = computed(() => {
  if (seasonStats.value.mostcleansheetsgoalkeeper === undefined) {
    return null;
  }
  return seasonStats.value.mostcleansheetsgoalkeeper.data;
});
</script>

<template>
  <v-row>
    <!-- 最多得点チーム -->
    <v-col cols="12" md="3">
      <SeasonStatsItem
        v-if="mostGoalsTeam"
        stats-label="最多得点チーム"
        :logo-path="mostGoalsTeam.logo_path"
        :team-name="mostGoalsTeam.name"
        :stats-item="`${seasonStats.team_with_most_goals_number}得点`"
      />
    </v-col>

    <!-- 1試合の最多得点チーム -->
    <v-col cols="12" md="3">
      <SeasonStatsItem
        v-if="mostGoalsPerMatchTeam"
        stats-label="1試合の最多得点チーム"
        :logo-path="mostGoalsPerMatchTeam.logo_path"
        :team-name="mostGoalsPerMatchTeam.name"
        :stats-item="`${seasonStats.team_with_most_goals_per_match_number}得点`"
      />
    </v-col>

    <!-- 最多クリーンシートチーム -->
    <v-col cols="12" md="3">
      <SeasonStatsItem
        v-if="mostCleanSheetsTeam"
        stats-label="最多クリーンシート"
        :logo-path="mostCleanSheetsTeam.logo_path"
        :team-name="mostCleanSheetsTeam.name"
        :stats-item="`${seasonStats.team_most_cleansheets_number}回`"
      />
    </v-col>

    <!-- 最多失点チーム -->
    <v-col cols="12" md="3">
      <SeasonStatsItem
        v-if="mostConcededGoalsTeam"
        stats-label="最多失点チーム"
        :logo-path="mostConcededGoalsTeam.logo_path"
        :team-name="mostConcededGoalsTeam.name"
        :stats-item="`${seasonStats.team_with_most_conceded_goals_number}失点`"
      />
    </v-col>

    <!-- 最多コーナキックチーム -->
    <v-col cols="12" md="3">
      <SeasonStatsItem
        v-if="mostCornersTeam"
        stats-label="最多コーナーキックチーム"
        :logo-path="mostCornersTeam.logo_path"
        :team-name="mostCornersTeam.name"
        :stats-item="`${seasonStats.team_most_corners_count}回`"
      />
    </v-col>

    <!-- 最多得点プレイヤー -->
    <v-col cols="12" md="3">
      <SeasonStatsItem
        v-if="topScorer"
        stats-label="最多得点プレイヤー"
        :logo-path="topScorer.image_path"
        :team-name="topScorer.display_name"
        :stats-item="`${seasonStats.season_topscorer_number}得点`"
      />
    </v-col>

    <!-- 最多アシストプレイヤー -->
    <v-col cols="12" md="3">
      <SeasonStatsItem
        v-if="assistTopScorer"
        stats-label="最多アシストプレイヤー"
        :logo-path="assistTopScorer.image_path"
        :team-name="assistTopScorer.display_name"
        :stats-item="`${seasonStats.season_assist_topscorer_number}アシスト`"
      />
    </v-col>

    <!-- 最多クリーンシートゴールキーパー -->
    <v-col cols="12" md="3">
      <SeasonStatsItem
        v-if="mostCleanSheetsGoalkeeper"
        stats-label="最多クリーンシートゴールキーパー"
        :logo-path="mostCleanSheetsGoalkeeper.image_path"
        :team-name="mostCleanSheetsGoalkeeper.display_name"
        :stats-item="`${seasonStats.goalkeeper_most_cleansheets_number}回`"
      />
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12">
      <SectionVSheet>
        <div class="stats-description" style="padding: 8px;">
          <h1 style="font-size: 18px; margin-bottom: 12px;">
            リーグスタッツ
          </h1>

          <v-row>
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
