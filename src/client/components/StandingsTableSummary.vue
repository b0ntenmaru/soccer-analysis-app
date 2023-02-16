<script setup lang="ts">
type Props = {
  seasonId: number;
}
const props = defineProps<Props>();
const { data: seasonStandingsData } = await useFetch(`/api/v1/standings/season/${props.seasonId}`, { lazy: true });

watch(() => props.seasonId, async () => {
  const { data } = await useFetch(`/api/v1/standings/season/${props.seasonId}`, { lazy: true });
  seasonStandingsData.value = data.value;
});

const currentStandings = (teamId: number) => {
  const viewedTeamId = useRoute().params.id;
  return viewedTeamId === String(teamId);
};
</script>

<template>
  <v-table
    v-for="seasonStandings in seasonStandingsData"
    :key="seasonStandings.id"
    density="compact"
    hover
    style="margin-bottom: 16px; border-radius: 8px; font-size: 14px;"
    rounded="lg"
  >
    <thead>
      <tr>
        <th class="text-left">
          #
        </th>
        <th class="text-left">
          名前
        </th>
        <th class="text-left">
          試合
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
        <th class="text-left">
          Pts
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="standings in seasonStandings.standings.data"
        :key="standings.team_id"
        :class="{currentPosition: currentStandings(standings.team_id)}"
      >
        <td>
          {{ standings.position }}
        </td>
        <td>
          <NuxtLink :to="`/teams/${standings.team_id}/seasons/${props.seasonId}`">
            {{ standings.team.data.short_code }}
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
          {{ standings.overall.points }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style lang="scss" scoped>
th, td {
  padding: 0 !important;
  text-align: center !important;
}

.currentPosition {
  background: #dbf2fd;
  color: #1b5673;
}
</style>
