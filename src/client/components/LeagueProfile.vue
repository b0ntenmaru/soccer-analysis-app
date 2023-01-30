<script setup lang="ts">

type Props = {
  image: string;
  country: string;
  season: string;
  matchesCompleted: number;
  totalMatches: number;
  progress: number;
}
const props = defineProps<Props>();

const displaySeason = (seasonText: string) => {
  return `${seasonText.slice(2, 4)}/${seasonText.slice(7, 9)}`;
};
</script>

<template>
  <div>
    <div class="text-center">
      <img :src="props.image" class="w-48 inline-block" />
    </div>

    <div>
      <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
          <li class="flex items-center py-3">
            <span>Country</span>
            <span class="ml-auto">
              {{ props.country }}
            </span>
          </li>

          <li class="flex items-center py-3">
            <span>Season</span>
            <span class="ml-auto">{{ displaySeason(props.season) }}</span>
          </li>

          <li class="flex items-center py-3">
            <span>Matches</span>
            <span class="ml-auto">{{ props.matchesCompleted }} / {{ props.totalMatches }} played</span>
          </li>
          <li class="flex items-center py-3">
            <span>Progress</span>
            <span class="ml-auto">{{ props.progress }}% completed</span>
          </li>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" :style="`width: ${props.progress}%`"></div>
          </div>
      </ul>
    </div>
  </div>
</template>
