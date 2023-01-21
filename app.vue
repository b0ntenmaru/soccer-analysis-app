<script setup lang="ts">
type UserJson = {
  id: number;
  name: string;
}

const { data: users } = useFetch<Array<UserJson>>('api/users', {
  server: false,
});
</script>

<template>
  <div>
    <v-btn class="ma-5" color="primary">my-btn</v-btn>
    {{ users }}
  </div>
</template>
