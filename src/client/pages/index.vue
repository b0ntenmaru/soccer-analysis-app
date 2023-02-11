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
    <v-col cols="12" sm="3">
      <v-sheet rounded="lg">
        <TopLeagues />
      </v-sheet>
    </v-col>

    <v-col cols="12" sm="5">
      <MatchTimeline v-if="leagueFixtures" :league-fixtures="leagueFixtures" />
    </v-col>

    <v-col cols="12" sm="4" rounded="lg">
      <div class="movie-content">
        <iframe
          height="200"
          width="100%"
          src="https://www.youtube.com/embed/videoseries?list=PLQ_voP4Q3cfeT5QqIr7RA7BEc2zGMn0nl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>

      <div class="movie-content">
        <iframe
          height="200"
          width="100%"
          src="https://www.youtube.com/embed/videoseries?list=PLEfXwIkfHxL-72tN494qs53P40hnBrDRW"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>

      <div class="movie-content">
        <iframe
          height="200"
          width="100%"
          src="https://www.youtube.com/embed/videoseries?list=PLEfXwIkfHxL-3BuYA9Gh8EnkZvVuBQd2m"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.match-calendar {
  margin-bottom: 12px;
}

.movie-content {
  margin-bottom: 14px;
}
</style>
