<script setup lang="ts">
type Props = {
  seasonId: number;
}
const props = defineProps<Props>();
const { data: standings } = await useFetch(`/api/v1/standings/season/${props.seasonId}`)

watch(() => props.seasonId, async () => {
  const { data } = await useFetch(`/api/v1/standings/season/${props.seasonId}`);
  standings.value = data.value;
});

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
      <tr v-for="s in standings.standings" v-if="standings" :key="s.team_id">
        <td>
          {{ s.position }}
        </td>
        <td class="team">
          <img width="20" :src="s.team.logo_path" /><span>{{ s.team_name }}</span>
        </td>
        <td>
          {{ s.overall.won }}
        </td>
        <td>
          {{ s.overall.draw }}
        </td>
        <td>
          {{ s.overall.lost }}
        </td>
        <td>
          {{ s.recent_form }}
        </td>
        <td>
          {{ s.points }}
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
