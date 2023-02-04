<script setup lang="ts">
const { data: leagues } = await useFetch('/api/v1/leagues');
</script>

<template>
  <div v-if="leagues">
    <a-card v-for="league in leagues" :key="league.id" style="width: 300px" size="small">
      <NuxtLink :to="`/leagues/${league.id}`">
        <a-avatar :src="league.logo_path" />
        {{ league.name }}
      </NuxtLink>
    </a-card>
  </div>
</template>

<style lang="scss" scoped>
</style>
