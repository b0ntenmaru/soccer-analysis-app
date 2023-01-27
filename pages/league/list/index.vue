<script setup lang="ts">
const { data } = useFetch('/api/league/list');
</script>

<template>
  <h1>リーグ一覧画面</h1>
  {{ data }}
</template>
