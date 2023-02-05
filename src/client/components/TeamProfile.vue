<script setup lang="ts">
import { TwitterOutlined } from '@ant-design/icons-vue';

type Props = {
  logoPath: string;
  name: string;
  countryImagePath: string;
  fifaName: string;
  founded: number;
  twitter: string;
}
const props = defineProps<Props>();

</script>

<template>
  <div class="team-profile">
    <div>
      <img
        :width="150"
        :src="props.logoPath"
      >
    </div>
    <div class="team-description">
      <div>
        <h1>{{ props.name }}</h1>
      </div>

      <div class="team-profile-sub-item">
        <div>
          <a-avatar :src="props.countryImagePath" />
        </div>

        <div>
          {{ props.founded }}年設立
        </div>

        <div v-if="props.twitter" class="twitter-icon">
          <a :href="`https://twitter.com/${props.twitter}`" target="_blank" rel="noopener"><TwitterOutlined /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
div.team-profile {
  // display: flex;
  // gap: 40px;
  text-align: center;

  div.team-description {
    color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    h1 {
      font-size: 36px;
      margin: 0;
    }

    div.team-profile-sub-item {
      display: flex;
      align-items: baseline;
      gap: 8px;
      justify-content: center;
    }

    div.twitter-icon {
      position: relative;
      top: 4px;

      a {
        display: inline-flex;
        font-size: 18px;
        align-items: center;
        gap: 2px;
        font-weight: bold;
      }
    }
  }
}
</style>
