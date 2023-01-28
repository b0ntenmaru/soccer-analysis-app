<script setup lang="ts">
const seasonId = useRoute().params.season_id;
const { data: leagueStats } = await useFetch(`/api/league/season/${seasonId}/stats`)
</script>

<template>
  <h1>リーグスタッツ閲覧画面</h1>
  <div v-if="leagueStats">
    <ul>
      <li>
        {{ leagueStats.name }}
      </li>
      <li>
        {{ leagueStats.name_jp }}
      </li>
      <li>
        {{ leagueStats.country }}
      </li>
      <li>
        {{ leagueStats.division }}
      </li>
      <li>
        {{ leagueStats.starting_year }}
      </li>
      <li>
        {{ leagueStats.ending_year }}
      </li>
      <li>
        <img :src="leagueStats.image" />
      </li>
      <li>
        {{ leagueStats.club_num }}
      </li>
      <li>
        {{ leagueStats.totalMatches }}
      </li>
      <li>
        {{ leagueStats.matchesCompleted }}
      </li>
      <li>
        {{ leagueStats.canceledMatchesNum }}
      </li>
      <li>
        {{ leagueStats.progress }} %
      </li>

      <h1>得点ランキング</h1>
      <ul>
        <li v-for="player in leagueStats.top_scorers">
          {{ player.full_name }}
        </li>
      </ul>

      <h1>アシストランキング</h1>
      <ul>
        アシストランキング
        <li v-for="player in leagueStats.top_assists">
          {{ player.full_name }}
        </li>
      </ul>
    </ul>

  </div>
</template>
