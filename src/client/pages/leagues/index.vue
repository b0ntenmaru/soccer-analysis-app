<script setup lang="ts">
const { data: leagues } = await useFetch('/api/v1/leagues');
</script>

<template>
  <div v-if="leagues">
    <h1>{{ leagues }}</h1>
  </div>
</template>

<style lang="scss" scoped>
</style>
