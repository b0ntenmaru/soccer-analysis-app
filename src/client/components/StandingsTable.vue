<script setup lang="ts">
type Props = {
  seasonId: number;
}
const props = defineProps<Props>();

const seasonId = computed(() => {
  return props.seasonId;
});

const { data: seasonStandingsData, pending } = await useAsyncData(
  'season-standings',
  () => $fetch(`/api/v1/standings/season/${seasonId.value}`),
  {
    lazy: true,
    watch: [seasonId]
  }
);

const displayResentForm = (recentRormString: string) => {
  return recentRormString.split('');
};

const displayPositionResult = (result: string | null) => {
  if (result === 'UEFA Champions League') {
    return 'champions-league';
  }

  if (result === 'UEFA Europa League') {
    return 'europa-league';
  }

  if (result === 'Relegation') {
    return 'relegation';
  }
};
</script>

<template>
  <v-card title="順位表" :loading="pending">
    <v-table
      v-for="seasonStandings in seasonStandingsData"
      :key="seasonStandings.id"
      density="compact"
      hover
      style="font-size: 12px;"
      rounded="lg"
    >
      <thead>
        <tr>
          <th class="text-left">
            #
          </th>
          <th class="text-left">
            チーム名
          </th>
          <th class="text-left">
            試合数
          </th>
          <th class="text-left">
            勝
          </th>
          <th class="text-left">
            分
          </th>
          <th class="text-left">
            負
          </th>
          <th>
            得:失
          </th>
          <th class="text-left">
            Pts
          </th>
          <th class="text-left">
            直近5試合
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="standings in seasonStandings.standings.data" :key="standings.team_id">
          <td>
            <span :class="displayPositionResult(standings.result)" class="position">
              <v-tooltip v-if="standings.result" activator="parent" location="bottom">
                <template v-if="standings.result === 'UEFA Champions League'">
                  チャンピオンズリーグ出場圏内
                </template>
                <template v-if="standings.result === 'UEFA Europa League'">
                  ヨーロッパリーグ出場圏内
                </template>
                <template v-if="standings.result === 'Relegation'">
                  降格圏内
                </template>
              </v-tooltip>
              {{ standings.position }}
            </span>
          </td>
          <td width="200">
            <NuxtLink :to="`/teams/${standings.team_id}`" style="text-decoration: none;">
              <v-avatar size="20" cover rounded>
                <v-img
                  :src="standings.team.data.logo_path"
                />
              </v-avatar>
              {{ standings.team_name }}
            </NuxtLink>
          </td>
          <td>
            {{ standings.overall.games_played }}
          </td>
          <td>
            {{ standings.overall.won }}
          </td>
          <td>
            {{ standings.overall.draw }}
          </td>
          <td>
            {{ standings.overall.lost }}
          </td>
          <td>
            {{ standings.overall.goals_scored }}:{{ standings.overall.goals_against }}
          </td>
          <td>
            {{ standings.overall.points }}
          </td>
          <td class="recent-form">
            <span v-for="item in displayResentForm(standings.recent_form)" :key="item">
              <template v-if="item === 'W'">
                <span class="won">
                  {{ item }}
                </span>
              </template>
              <template v-if="item === 'L'">
                <span class="lost">
                  {{ item }}
                </span>
              </template>
              <template v-if="item === 'D'">
                <span class="draw">
                  {{ item }}
                </span>
              </template>
            </span>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<style lang="scss" scoped>

td {
  padding: 0 6px;
}
td.recent-form {
  display: flex;
  align-items: center;

  span {
    width: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 26px;
    padding: 1px 2px;
  }
}

span.position {
  width: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 29px;
  padding: 2px 4px;
}

span.relegation {
  background: rgb(193, 38, 45);;
  color: #fff;
  font-weight: bold;
}

span.champions-league {
  background: rgb(21 104 177);
  color: #fff;
  font-weight: bold;
}

span.europa-league {
  background: rgb(177 136 21);
  color: #fff;
  font-weight: bold;
}

span.won {
  background: rgb(21, 177, 104);
  color: #fff;
  font-weight: bold;
}

span.lost {
  background: rgb(199, 54, 31);;
  color: #fff;
  font-weight: bold;
}

span.draw {
  background: rgb(164, 169, 179);;
  color: #fff;
  font-weight: bold;
}

</style>
