<script setup lang="ts">
const seasonId = useRoute().params.season_id;
const { data } = await useFetch(`/api/league-season/${seasonId}`)
</script>

<template>
  <h1>リーグスタッツ閲覧画面</h1>
  {{ data }}
</template>
