<script setup lang="ts">
type Props = {
  seasonStandings: SeasonStandings
}
const props = defineProps<Props>();

</script>

<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="position" style="text-align: center;">
          #
        </th>
        <th>Team</th>
        <th>Won</th>
        <th>Draw</th>
        <th>Lost</th>
        <th>Last 5</th>
        <th>Point</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="standingsData in props.seasonStandings.standings.data" :key="standingsData.team_id">
        <td class="position-wrapper">
          <span class="position">
            {{ standingsData.position }}
          </span>
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
td.position-wrapper {
  text-align: center;
}

span.position {
  background: red;
  padding: 5px 8px;
  border-radius: 30px;
}

td.team {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
