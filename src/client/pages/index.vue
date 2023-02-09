<script setup lang="ts">
import dayjs, { Dayjs } from 'dayjs';

definePageMeta({
  layout: 'home'
});

const value = ref<Dayjs>();
const selectedDate = ref<string>();
const selectDate = (value: Dayjs) => {
  selectedDate.value = dayjs(value).format('YYYY-MM-DD');
};

selectedDate.value = dayjs().format('YYYY-MM-DD');
const { data: fixtures } = await useFetch(`/api/v1/fixtures/date/${selectedDate.value}`, { lazy: true });

watch(selectedDate, async () => {
  const { data } = await useFetch(`/api/v1/fixtures/date/${selectedDate.value}`, { lazy: true });
  fixtures.value = data.value;
});
</script>

<template>
  <a-row type="flex" :gutter="{ md: 20 }">
    <a-col :span="24" :md="7">
      <a-card size="small" class="match-calendar">
        <a-calendar v-model:value="value" :fullscreen="false" @select="selectDate" />
      </a-card>

      <div>
        <TopLeagues />
      </div>
    </a-col>

    <a-col :span="24" :md="9">
      <MatchTimeline v-if="fixtures" :fixtures="fixtures" />
    </a-col>

    <a-col :span="24" :md="8">
      <a-card>
        いいいいいい
      </a-card>
    </a-col>
  </a-row>
</template>

<style scoped lang="scss">
.match-calendar {
  margin-bottom: 12px;
}
</style>
