<script setup lang="ts">
import { TopPlayer } from '@@/src/types/response_types/GetSeasonStatsByIdData';

type Props = {
  topPlayers: Array<TopPlayer>;
  type: 'goal' | 'assist';
}
const props = defineProps<Props>();
</script>

<template>
  <v-list rounded="lg">
    <v-list-item>
      <div class="ranking-header">
        <div>#</div>
        <div>
          <template v-if="props.type === 'goal'">
            ゴール
          </template>

          <template v-if="props.type === 'assist'">
            アシスト
          </template>
        </div>
      </div>
    </v-list-item>
    <v-list-item v-for="topPlayer in props.topPlayers" :key="topPlayer.player_id" link>
      <div class="ranking-item">
        <div class="ranking-item-left">
          <div style="width: 22px;">
            {{ topPlayer.position }}
          </div>

          <div>
            <v-avatar size="30">
              <v-img :src="topPlayer.player.data.image_path" />
            </v-avatar>
          </div>

          <div class="player-description">
            <div>
              {{ topPlayer.player.data.display_name }}
            </div>

            <div class="player-team-description">
              <v-avatar size="20">
                <v-img :src="topPlayer.player.data.team.data.logo_path" />
              </v-avatar>
              <span>{{ topPlayer.player.data.team.data.name }}</span>
            </div>
          </div>
        </div>

        <div>
          <template v-if="props.type === 'goal'">
            {{ topPlayer.goals }}
          </template>

          <template v-if="props.type === 'assist'">
            {{ topPlayer.assists }}
          </template>
        </div>
      </div>
    </v-list-item>
  </v-list>
</template>

<style scoped>
div.ranking-header {
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
}

.ranking-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.ranking-item-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

div.player-team-description {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
