<script setup lang="ts">
import { LeagueListData } from '@/types/footy_stats_api';

const { data: leagueListData } = await useFetch<LeagueListData>(
    'https://api.football-data-api.com/league-list',
    {
      server: false
    }
  );
</script>

<template>
  <h1>リーグ一覧画面</h1>
  <div>
    <template v-for="league in leagueListData">
      <ul>
        <li>リーグ名: {{ league.league_name }}</li>
        <li>国: {{ league.country }}</li>
        <li>
          <ul v-for="s in league.season">
            <li>{{ s.year }}</li>
            <li>シーズンID: {{ s.id }}</li>
          </ul>
        </li>
      </ul>
    </template>
  </div>
</template>
