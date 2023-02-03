<script setup lang="ts">
const { data: leagues } = await useFetch('/api/v1/leagues');
</script>

<template>
  <div v-if="leagues">
    <ul>
      <li v-for="league in leagues" :key="league.id">
        <NuxtLink :to="`/leagues/${league.id}`">
          {{ league.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
