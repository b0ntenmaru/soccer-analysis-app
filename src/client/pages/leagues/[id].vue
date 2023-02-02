<script setup lang="ts">
const leagueId = useRoute().params.id;
const { data: league } = await useFetch(`/api/v1/leagues/${leagueId}`);

const latestSeason = computed(() => {
  if (league.value === null) return;
  if (league.value.seasons === undefined) return;

  return league.value.seasons.data.find(season => season.is_current_season === true);
})

const selectedSeasonId = ref<number | undefined>(latestSeason.value?.id);
</script>

<template>
  <template v-if="league">
    <div class="w-full lg:w-2/6">
      <SectionCard>
        <div class="text-center">
          <img :src="league.logo_path" class="w-48 inline-block" />
        </div>

        <div>
          <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
            <li class="flex items-center py-3">
              <span>Name</span>
              <span class="ml-auto">
                {{ league.name }}
              </span>
            </li>

            <li class="flex items-center py-3">
              <label for="countries" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Season</label>
              <select v-model="selectedSeasonId" id="countries" class="w-2/5 ml-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option v-for="s in league.seasons.data" :value="s.id" >
                  {{ s.name }}
                </option>
              </select>
            </li>
          </ul>
        </div>
      </SectionCard>
    </div>


    <div class="w-full lg:w-4/6">
      <SectionCard>
        <h1 class="text-center">Standings</h1>
        <Standings v-if="selectedSeasonId" :season-id="selectedSeasonId" />
      </SectionCard>
    </div>
  </template>
</template>
