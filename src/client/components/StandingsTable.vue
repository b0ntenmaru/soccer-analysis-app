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
          チーム名
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
      <tr v-for="standings in seasonStandings.standings.data" :key="standings.team_id">
        <td>
          {{ standings.position }}
        </td>
        <td width="200">
          <NuxtLink :to="`/teams/${standings.team_id}`">
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
          {{ standings.overall.points }}
        </td>
      </tr>
    </tbody>
  </v-table>

  <!-- <div v-for="seasonStandings in seasonStandingsData" :key="seasonStandings.id">
    {{ seasonStandings }}
  </div> -->
</template>

<style lang="scss">
</style>
