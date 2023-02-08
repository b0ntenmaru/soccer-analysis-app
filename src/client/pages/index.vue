<script setup lang="ts">
definePageMeta({
  layout: 'home'
});

</script>

<template>
  <a-row type="flex" :gutter="{ md: 20 }">
    <a-col :span="24" :md="6">
      <a-card title="トップリーグ" size="small">
        <TopLeagues />
      </a-card>
    </a-col>

    <a-col :span="24" :md="10">
      <a-card>
        いいいいいい
      </a-card>
    </a-col>
    <a-col :span="24" :md="8">
      <a-card>
        いいいいいい
      </a-card>
    </a-col>
  </a-row>
</template>

<style scoped lang="scss">
</style>
