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
    {{ users }}
  </div>
</template>
