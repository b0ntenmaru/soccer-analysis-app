<script setup lang="ts">
type Props = {
  seasonStandingsDataItem: {
    id: number;
    name: string;
    league_id: number;
    season_id: number;
    round_id: number;
    round_name: number;
    type: string;
    stage_id: number;
    stage_name: string;
    resource: string;
    standings: {
      data: Array<StandingsData>
    }
  }
}
const props = defineProps<Props>();

</script>

<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th>#</th>
        <th>Team</th>
        <th>Won</th>
        <th>Draw</th>
        <th>Lost</th>
        <th>Last 5</th>
        <th>Point</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="standingsData in seasonStandingsDataItem.standings.data" :key="standingsData.team_id">
        <td>
          {{ standingsData.position }}
        </td>
        <td class="team">
          <img width="20" :src="standingsData.team.data.logo_path"><span>{{ standingsData.team_name }}</span>
        </td>
        <td>
          {{ standingsData.overall.won }}
        </td>
        <td>
          {{ standingsData.overall.draw }}
        </td>
        <td>
          {{ standingsData.overall.lost }}
        </td>
        <td>
          {{ standingsData.recent_form }}
        </td>
        <td>
          {{ standingsData.points }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped>
td.team {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
</style>
