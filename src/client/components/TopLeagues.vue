<script setup lang="ts">
const { data: leagues } = await useFetch('/api/v1/leagues', { lazy: true });

const topLeagueIds = [2, 5, 8, 24, 72, 82, 301, 384, 390, 564, 570];

const topLeagues = computed(() => {
  if (leagues.value === null) { return; }

  // eslint-disable-next-line array-callback-return
  const results = leagues.value.filter((league) => {
    if (topLeagueIds.includes(league.id)) {
      return league;
    }
  });
  return results;
});
</script>

<template>
  <ul class="league-list">
    <li v-for="league in topLeagues" :key="league.id">
      <NuxtLink :to="`/leagues/${league.id}`">
        <div class="league-list-item">
          <div>
            <img :src="league.logo_path">
          </div>
          <div>
            {{ league.name }}
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul.league-list {
  padding: 0;
  margin: 0;

  li {
    width: 100%;
    list-style: none;

    .league-list-item {
      display: flex;
      padding: 8px;
      gap: 24px;
      align-items: center;

      img {
        width: 26px;
      }
    }
  }
}
</style>
