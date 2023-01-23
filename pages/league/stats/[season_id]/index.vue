<script setup lang="ts">
const route = useRoute()

const seasonId = computed(() => route.params.season_id)

const { data: leagueStatsData } = await useFetch(
  `https://api.football-data-api.com/league-season?season_id=${seasonId}`,
  { server: false }
)

</script>

<template>
  <h1>リーグスタッツ</h1>
  <div>
    {{ JSON.stringify(leagueStatsData) }}
  </div>
</template>
