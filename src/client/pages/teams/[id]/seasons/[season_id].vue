<script setup lang="ts">
definePageMeta({
  layout: 'home'
});

const id = useRoute().params.id;
const { data: team } = await useFetch(`/api/v1/teams/${id}`, {
  lazy: true
});

const teamProfile = computed(() => {
  if (team.value === null) { return; }

  return {
    twitter: team.value.twitter,
    founded: team.value.founded,
    totalPlayers: team.value.squad?.data.length,
    coach: {
      fullname: team.value.coach?.data.fullname,
      imagePath: team.value.coach?.data.image_path
    }
  };
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
        <!-- <StandingsTableSummary :season-id="seasonId" /> -->
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
