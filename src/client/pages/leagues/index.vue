<script setup lang="ts">
const { data: leagues } = await useFetch('/api/v1/leagues');
</script>

<template>
  <div v-if="leagues">
    <v-row>
      <v-col v-for="league in leagues" :key="league.id" cols="4">
        <v-card nuxt :to="`/leagues/${league.id}`" class="league" :style="`background-image: url(${league.logo_path})`">
          <div class="league-name">
            <h1>{{ league.name }}</h1>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.league {
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 12px;
  background-color: #666666;
  position: relative;
  z-index: 0;
  line-height: 170px;

  div {
    align-items: center;
    color: white;
    text-shadow: 0 0 10px #333;
  }

  div.league-logo {
    img {
      width: 100px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    background: inherit;
    filter: blur(4px);
    z-index: -1;
  }
}
</style>
