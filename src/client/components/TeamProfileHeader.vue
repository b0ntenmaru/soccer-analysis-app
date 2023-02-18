<script setup lang="ts">
type Props = {
  teamLogoPath: string;
  name: string;
  countryLogoPath: string;
}
const props = defineProps<Props>();
</script>

<template>
  <header class="team-profile">
    <v-avatar size="150" cover rounded>
      <v-img
        :src="props.teamLogoPath"
        :alt="`${props.name}のロゴ`"
      />
    </v-avatar>

    <h1 class="team-name">
      <span>{{ props.name }}</span>
      <v-avatar size="26" cover rounded>
        <v-img :src="props.countryLogoPath" />
      </v-avatar>
    </h1>
  </header>
</template>

<style scoped lang="scss">
.team-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px;

  .team-name {
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
