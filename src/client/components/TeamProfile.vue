<script setup lang="ts">
import { TwitterOutlined } from '@ant-design/icons-vue';

type Props = {
  logoPath: string;
  name: string;
  countryImagePath: string;
  fifaName: string;
  twitter: string | null;
}
const props = defineProps<Props>();

</script>

<template>
  <div class="team-profile">
    <div>
      <img
        :width="100"
        :src="props.logoPath"
      >
    </div>
    <div class="team-name">
      <div>
        <h1>
          {{ props.name }}
          <a v-if="props.twitter" :href="`https://twitter.com/${props.twitter}`" target="_blank" rel="noopener"><TwitterOutlined /></a>
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.team-profile {
  text-align: center;

  div.team-name {
    color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    h1 {
      font-size: 26px;
      margin: 0;
    }

    div.team-profile-sub-item {
      display: flex;
      align-items: baseline;
      gap: 8px;
      justify-content: center;
    }
  }
}
</style>
