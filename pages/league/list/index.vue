<script setup lang="ts">
const { data: leagueListData } = useFetch('/api/league/list');
</script>

<template>
  <h1>リーグ一覧画面</h1>
  <ul>
    <template v-for="league in leagueListData">
      <li>
        {{ league.name }}
      </li>
      <li>
        <ul v-for="s in league.season">
          <li>
            <NuxtLink :to="`/league/stats/${s.id}`">
              {{ s.year }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </template>
  </ul>
</template>
