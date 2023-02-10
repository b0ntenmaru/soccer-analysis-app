<script setup lang="ts">
// const value = ref<Dayjs>();
const selectedDate = ref<string>();
// const selectDate = (value: Dayjs) => {
//   selectedDate.value = dayjs(value).format('YYYY-MM-DD');
// };

// selectedDate.value = dayjs().format('YYYY-MM-DD');
const { data: leagueFixtures } = await useFetch(`/api/v1/fixtures/date/${'2023-02-11'}`, { lazy: true });

watch(selectedDate, async () => {
  const { data } = await useFetch(`/api/v1/fixtures/date/${selectedDate.value}`, { lazy: true });
  leagueFixtures.value = data.value;
});
</script>

<template>
  <v-row>
    <v-col cols="3">
      <v-sheet rounded="md">
        <TopLeagues />
      </v-sheet>
    </v-col>

    <v-col cols="5">
      <MatchTimeline v-if="leagueFixtures" :league-fixtures="leagueFixtures" />
    </v-col>

    <v-col cols="4">
      <v-sheet rounded="md">
        ああああ
      </v-sheet>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.match-calendar {
  margin-bottom: 12px;
}

.video-content {
  margin-bottom: 14px;
}
</style>
