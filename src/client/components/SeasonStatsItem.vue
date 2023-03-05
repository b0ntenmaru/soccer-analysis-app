<script setup lang="ts">
type Props = {
  statsLabel: string;
  teamName: string;
  logoPath: string;
  statsItem: string;
}
const props = defineProps<Props>();
</script>

<template>
  <SectionVSheet>
    <div style="padding: 8px;">
      <h1 style="font-size: 14px; margin-bottom: 8px;">
        {{ props.statsLabel }}
      </h1>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
        <v-avatar size="100" cover rounded>
          <v-img
            :src="props.logoPath"
            :alt="`${props.teamName}のロゴ`"
          />
        </v-avatar>
        <span>{{ props.teamName }}</span>
        <span style="font-weight: bold; font-size: 18px;">{{ props.statsItem }}</span>
      </div>
    </div>
  </SectionVSheet>
</template>
