<script setup lang="ts">
import type { Squad } from '@@/src/types/sportmonks_entity/Squad';

type Props = {
  squadData: Array<Squad>;
}
const props = defineProps<Props>();
</script>

<template>
  <a-card title="Squad List" class="squad-list">
    <SquadListItem v-for="player in props.squadData" :key="player.player_id" :player-id="player.player_id" />
  </a-card>
</template>
