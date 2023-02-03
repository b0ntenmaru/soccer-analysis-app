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
    <img :src="league.logo_path" class="w-48 inline-block" />
    <div>
      <ul>
        <li>
          <span>Name</span>
          <span>
            {{ league.name }}
          </span>
        </li>

        <li>
          <label for="countries">Season</label>
          <select v-model="selectedSeasonId" id="countries">
            <option v-for="s in league.seasons.data" :value="s.id" >
              {{ s.name }}
            </option>
          </select>
        </li>
      </ul>
    </div>

    <div>
      <StandingsTableList v-if="selectedSeasonId" :season-id="selectedSeasonId" />
    </div>
  </template>
</template>
