<script setup lang="ts">
const { data: leagues } = await useFetch('/api/v1/leagues');
</script>

<template>
  <div v-if="leagues" >
    <ul>
      <li v-for="league in leagues">
        <NuxtLink :to="`/leagues/${league.id}`">{{ league.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
