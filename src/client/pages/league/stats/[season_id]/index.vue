<script setup lang="ts">
const seasonId = useRoute().params.season_id;
const { data: leagueStats } = await useFetch(`/api/league/season/${seasonId}/stats`)
</script>

<template>
  <template v-if="leagueStats">
    <!-- サブカラム -->
    <!-- リーグプロフィール -->
    <div class="w-full lg:w-2/6">
      <SectionCard>
        <LeagueProfile
          v-bind="leagueStats"
        />
      </SectionCard>

      <!-- 得点ランキング -->
      <SectionCard>
        <div class="font-bold">
          得点ランキング
        </div>
        <div class="mb-3"></div>
        <div v-for="scorer in leagueStats.top_scorers">
          {{  scorer.full_name }}
        </div>
      </SectionCard>
    </div>

    <!-- メインカラム -->
    <div class="w-full lg:w-4/6">
      <SectionCard>
        <div class="flex">
          あああああ
        </div>
      </SectionCard>
    </div>
  </template>
</template>
