<script setup lang="ts">
const id = useRoute().params.id;
const { data: team } = await useFetch(`/api/v1/teams/${id}`);
</script>

<template>
  <div>
    {{ team }}
  </div>
</template>
