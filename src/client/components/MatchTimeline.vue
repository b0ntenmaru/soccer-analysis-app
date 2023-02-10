<script setup lang="ts">
import type { GetFixturesByData } from '~~/src/types/response_types/GetFixturesByData';

type Props = {
  fixtures: GetFixturesByData
}
const props = defineProps<Props>();

</script>

<template>
  <a-card title="マッチタイムライン" bordered>
    <div v-for="fixture in props.fixtures" :key="fixture.id" class="fixture">
      <a-row type="flex" :gutter="{ md: 0 }">
        <a-col :md="11" class="local-team">
          <div class="local-team-name">
            <img :src="fixture.localTeam.data.logo_path">
            <span>{{ fixture.localTeam.data.name }}</span>
          </div>
          <div>
            {{ fixture.scores.localteam_score }}
          </div>
        </a-col>

        <a-col :md="2" class="local-team">
          -
        </a-col>

        <a-col :md="11" class="visitor-team">
          <div>
            {{ fixture.scores.visitorteam_score }}
          </div>

          <div class="visitor-team-name">
            <img :src="fixture.visitorTeam.data.logo_path">
            <span>{{ fixture.visitorTeam.data.name }}</span>
          </div>
        </a-col>
      </a-row>
    </div>
  </a-card>
</template>

<style scoped lang="scss">
.fixture {
  padding: 16px 6px;
  border-bottom: 1px solid #f0f0f0;

  .local-team {
    display: flex;
    align-items: center;
    justify-content: center;

    .local-team-name {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 136px;

      img {
        width: 30px;
      }
    }
  }

  .visitor-team {
    display: flex;
    align-items: center;
    justify-content: center;

    .visitor-team-name {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 136px;

      img {
        width: 30px;
      }
    }
  }
}

.fixture:hover {
  background: #f0f2f5;;
}
</style>
