<script setup lang="ts">
import { TwitterOutlined } from '@ant-design/icons-vue';

const id = useRoute().params.id;
const { data: team } = await useFetch(`/api/v1/teams/${id}`);
</script>

<template>
  <div v-if="team">
    <a-row type="flex" :gutter="{ md: 20 }">
      <a-col :span="24" :md="8">
        <SectionCard class="section-card">
          <TeamProfile
            :logo-path="team.logo_path"
            :name="team.name"
            :country-image-path="team.country.data.image_path"
            :fifa-name="team.country.data.extra.fifa"
            :twitter="team.twitter"
          />
        </SectionCard>

        <SectionCard class="section-card">
          <StandingsTable :season-id="team.current_season_id" />
        </SectionCard>
      </a-col>
      <a-col :span="24" :md="16">
        <SectionCard>
          <TeamSeasonStatistics :team-id="team.id" :season-id="team.current_season_id" />
        </SectionCard>

        <SectionCard class="section-card">
          あああ
        </SectionCard>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped lang="scss">
.section-card {
  margin-bottom: 20px;

  dl {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);

    dt {
      width: 50%;
      font-weight: bold;
    }
  }
}
</style>
