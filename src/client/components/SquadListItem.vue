<script setup lang="ts">
type Props = {
  playerId: number;
}
const props = defineProps<Props>();

const { data: player } = await useFetch(`/api/v1/players/${props.playerId}`, { lazy: true });

const displayCountryText = (countryName: string) => {
  return countryName.split(',')[0];
};
</script>

<template>
  <a-card-grid v-if="player" class="squad-list-item">
    <div>
      <img :src="player.image_path" class="profile-image">
    </div>

    <div class="player-name">
      {{ player.display_name }}
    </div>

    <div v-if="player.position" class="position-name">
      {{ player.position.data.name }}
    </div>

    <div>
      {{ displayCountryText(player.country.data.extra.fifa) }} <img :src="player.country.data.image_path" class="country-image">
    </div>
  </a-card-grid>
</template>

<style scoped lang="scss">
.squad-list-item {
  width: 20%;
  display: inline-flex;
  height: 190px;
  text-align: center;
  flex-direction: column;
  gap: 3px;

  img.profile-image {
    width: 66px;
  }

  div.player-name {
    font-weight: bold;
  }

  div.position-name {
    font-size: 12px;
  }

  img.country-image {
    width: 20px;
  }
}

@media screen and (max-width:768px) {
  .squad-list-item {
    width: 50%;
  }
}
</style>
