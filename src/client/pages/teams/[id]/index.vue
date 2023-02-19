<script setup lang="ts">
definePageMeta({
  layout: 'home'
});

const teamId = useRoute().params.id;
const selectedLeagueId = ref<number>();
const selectedSeasonId = ref<number>();

const { data: team } = await useFetch(`/api/v1/teams/${teamId}`, {
  lazy: true
});
const { data: leagueSeasons } = await useFetch(`/api/v1/teams/${teamId}/history`, {
  lazy: true
});

onUpdated(() => {
  selectedLeagueId.value = team.value?.league.data.id;

  if (seasons.value == null) { return; }
  selectedSeasonId.value = seasons.value[0].id;
});

const teamProfile = computed(() => {
  if (team.value === null) { return; }

  return {
    twitter: team.value.twitter,
    founded: team.value.founded,
    totalPlayers: team.value.squad.data.length,
    coach: {
      fullname: team.value.coach.data.fullname,
      imagePath: team.value.coach.data.image_path
    }
  };
});

const leagues = computed(() => {
  return leagueSeasons.value?.map((leagueSeason) => {
    return {
      leagueId: leagueSeason.leagueId,
      leagueName: leagueSeason.leagueName
    };
  });
});

const seasons = computed(() => {
  const leagueSeason = leagueSeasons.value?.find(leagueSeason => leagueSeason.leagueId === selectedLeagueId.value);
  return leagueSeason?.seasons.reverse();
});

</script>

<template>
  <v-row v-if="team" justify-md="center" style="margin-top: 5px;">
    <v-col cols="12" md="4">
      <v-card style="margin-bottom: 16px;">
        <TeamProfileHeader
          :team-logo-path="team.logo_path"
          :name="team.name"
          :country-logo-path="team.country.data.image_path"
        />
        <div style="padding: 0 20px;">
          <v-select
            v-model="selectedLeagueId"
            label="リーグを選択"
            variant="underlined"
            :items="leagues"
            item-title="leagueName"
            item-value="leagueId"
          />
          <v-select
            v-model="selectedSeasonId"
            label="シーズンを選択"
            variant="underlined"
            :items="seasons"
            item-title="name"
            item-value="id"
          />
        </div>
      </v-card>

      <v-card style="margin-bottom: 16px;">
        <v-list density="compact">
          <v-list-item>
            <div class="team-profile-list-item">
              <span>twitter</span>
              <span><a :href="`https://twitter.com/${teamProfile?.twitter}`" target="_blank" rel="noopener">{{ teamProfile?.twitter }}</a></span>
            </div>
          </v-list-item>
          <v-list-item>
            <div class="team-profile-list-item">
              <span>設立</span>
              <span>{{ teamProfile?.founded }}年</span>
            </div>
          </v-list-item>
          <v-list-item>
            <div class="team-profile-list-item">
              <span>選手数</span>
              <span>{{ teamProfile?.totalPlayers }}人</span>
            </div>
          </v-list-item>
          <v-list-item>
            <div class="team-profile-list-item">
              <span>監督</span>
              <span>{{ teamProfile?.coach.fullname }}</span>
            </div>
          </v-list-item>
        </v-list>
      </v-card>

      <v-card>
        <StandingsTableSummary v-if="selectedSeasonId" :season-id="selectedSeasonId" />
      </v-card>
    </v-col>

    <v-col cols="12" md="8">
      <v-card>
        ああああ
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.team-profile-list-item {
  display: flex;
  justify-content: space-between;
}
</style>
