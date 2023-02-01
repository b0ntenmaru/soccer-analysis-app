<script setup lang="ts">
const leagueId = useRoute().params.id;
const { data: league } = await useFetch(`/api/v1/leagues/${leagueId}`);
</script>

<template>
  <!--
    リーグ詳細画面
    リーグプロフィール
    リーグ一覧
    得点ランキングなど
  -->

  {{ league }}
</template>
