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
  <h1>リーグ一覧画面</h1>

</template>
