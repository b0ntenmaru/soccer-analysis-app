<script setup lang="ts">
type Props = {
  squadData: SquadData;
}
const props = defineProps<Props>();
</script>

<template>
  <a-card title="Squad List" class="squad-list">
    <SquadListItem v-for="player in props.squadData" :key="player.player_id" :player-id="player.player_id" />
  </a-card>
</template>
