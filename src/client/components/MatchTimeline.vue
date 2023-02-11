<script setup lang="ts">
import type { LeagueFixtures } from 'src/types/entity/LeagueFixtures';

type Props = {
  leagueFixtures: LeagueFixtures
}
const props = defineProps<Props>();

</script>

<template>
  <v-list v-for="leagueFixture in props.leagueFixtures" :key="leagueFixture.league_id" rounded="lg" class="match-timeline">
    <section>
      <span><img :src="leagueFixture.league_logo_path" :style="{width: '30px' }"></span>
      <span>{{ leagueFixture.league_name }}</span>
    </section>

    <v-list-item v-for="fixture, index in leagueFixture.fixtures" :key="index" size="small" link border>
      <div class="fixture">
        <div class="local-team team">
          <div class="team-name">
            <img :src="fixture.local_team.logo_path" class="team-logo" width="20">
            <span>{{ fixture.local_team.name }}</span>
          </div>

          <span>
            {{ fixture.scores.localteam_score }}
          </span>
        </div>

        <div class="info">
          <div>
            ー
          </div>
          <div class="sub">
            <span>{{ fixture.time.starting_at.time }}</span>
            <span>{{ fixture.time.status }}</span>
          </div>
        </div>

        <div class="visitor-team team">
          <span>
            {{ fixture.scores.visitorteam_score }}
          </span>
          <div class="team-name">
            <img :src="fixture.visitor_team.logo_path" class="team-logo" width="20">
            <span>{{ fixture.visitor_team.name }}</span>
          </div>
        </div>
      </div>
    </v-list-item>
  </v-list>
</template>

<style scoped lang="scss">

.match-timeline {
  margin-bottom: 14px;

  section {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 10px;
  }
}

.fixture {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;

  .team {
    display: flex;
    align-items: center;

    .team-name {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 170px;

      span {
        text-align: center;
      }
    }

    .team-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    align-items: center;
    position: relative;
    top: 12px;

    .sub {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
