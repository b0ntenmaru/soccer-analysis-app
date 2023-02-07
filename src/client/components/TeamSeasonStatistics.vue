<script setup lang="ts">
type Props = {
  teamId: number;
  seasonId: number;
};
const props = defineProps<Props>();
const { data: teamSeasonStats } = await useFetch(
  `/api/v1/teams/${props.teamId}/season_stats/${props.seasonId}`,
  { lazy: true }
);

const totalMatchCount = (stats: Stats) => {
  return stats.win.total + stats.lost.total + stats.draw.total;
};

const winningPercent = (stats: Stats) => {
  return (stats.win.total / totalMatchCount(stats)) * 100;
};

const antdStatisticStyle = 'margin-bottom: 16px; font-weight: bold;';

</script>

<template>
  <div v-for="stats in teamSeasonStats" :key="stats.stage_id">
    <h1>シーズンスタッツ</h1>

    <a-row type="flex">
      <a-col :span="12" class="winning-progress">
        <a-progress type="circle" :percent="winningPercent(stats)" :format="(percent: number) => `勝率${percent}%`" :width="150" />
      </a-col>

      <a-col :span="8">
        <a-statistic title="勝利数 / 総試合数" :value="`${stats.win.total} / ${totalMatchCount(stats)}`" :value-style="antdStatisticStyle" />
        <a-statistic title="敗北数 / 総試合数" :value="`${stats.lost.total} / ${totalMatchCount(stats)}`" :value-style="antdStatisticStyle" />
        <a-statistic title="引き分け数 / 総試合数" :value="`${stats.draw.total} / ${totalMatchCount(stats)}`" :value-style="antdStatisticStyle" />
      </a-col>
    </a-row>

    <a-row type="flex" style="margin-top: 16px;">
      <a-col :span="12">
        <a-statistic title="総得点数" :value="stats.goals_for.total" :value-style="antdStatisticStyle" />
        <a-statistic title="総失点数" :value="stats.goals_against.total" :value-style="antdStatisticStyle" />
        <a-statistic title="クリーンシートの回数" :value="stats.clean_sheet.total" :value-style="antdStatisticStyle" />
      </a-col>

      <a-col :span="12">
        <a-statistic title="1試合あたりの平均得点数" :value="stats.avg_goals_per_game_scored.total" :value-style="antdStatisticStyle" />
        <a-statistic title="1試合あたりの平均失点数" :value="stats.avg_goals_per_game_conceded.total" :value-style="antdStatisticStyle" />
        <a-statistic title="平均ボール支配率" :value="`${stats.avg_ball_possession_percentage}%`" :value-style="antdStatisticStyle" />
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.winning-progress {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
