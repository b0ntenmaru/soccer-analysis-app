<script setup lang="ts">
import { TwitterOutlined } from '@ant-design/icons-vue';

const id = useRoute().params.id;
const { data: team } = await useFetch(`/api/v1/teams/${id}`);
</script>

<template>
  <div v-if="team">
    <SectionCard class="section-card">
      <TeamProfile
        :logo-path="team.logo_path"
        :name="team.name"
        :country-image-path="team.country.data.image_path"
        :fifa-name="team.country.data.extra.fifa"
        :founded="team.founded"
        :twitter="team.twitter"
      />
    </SectionCard>

    <SectionCard class="section-card">
      ああああ
    </SectionCard>
  </div>
</template>

<style scoped lang="scss">
.section-card {
  margin-bottom: 20px;
}
</style>
