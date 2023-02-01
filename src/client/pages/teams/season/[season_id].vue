<script setup lang="ts">
const seasonId = useRoute().params.season_id;
const { data: teams } = await useFetch(`/api/v1/teams/season/${seasonId}`);
</script>

<template>
  {{ teams }}
</template>
