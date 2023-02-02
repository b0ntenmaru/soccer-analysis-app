<script setup lang="ts">
const { data: leagues } = await useFetch('/api/v1/leagues');
</script>

<template>
  {{ leagues }}
</template>
