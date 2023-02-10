<script setup lang="ts">
import type { LeagueFixtures } from 'src/types/entity/LeagueFixtures';

type Props = {
  leagueFixtures: LeagueFixtures
}
const props = defineProps<Props>();

</script>

<template>
  <v-list v-for="leagueFixture in props.leagueFixtures" :key="leagueFixture.league_id" rounded="lg" class="match-timeline">
    <h3 :style="{ margin: 0}">
      <img :src="leagueFixture.league_logo_path" :style="{width: '40px' }">
      {{ leagueFixture.league_name }}
    </h3>

    <v-list-item v-for="fixture, index in leagueFixture.fixtures" :key="index" size="small" link>
      <div class="league-fixture">
        <div class="fixture-detail">
          <div class="team">
            <div class="team-name">
              <img :src="fixture.local_team.logo_path" class="team-logo">
              <span>{{ fixture.local_team.name }}</span>
            </div>

            <div>
              {{ fixture.scores.localteam_score }}
            </div>
          </div>

          <div class="team">
            <div class="team-name">
              <img :src="fixture.visitor_team.logo_path" class="team-logo">
              <span>{{ fixture.visitor_team.name }}</span>
            </div>

            <div>
              {{ fixture.scores.visitorteam_score }}
            </div>
          </div>
        </div>

        <div class="fixture-date">
          <span>{{ fixture.time.starting_at.time }}</span>
          <span>{{ fixture.time.status }}</span>
        </div>
      </div>
    </v-list-item>
  </v-list>
</template>

<style scoped lang="scss">
div.match-timeline {
  margin-bottom: 14px;

  h3 {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

.league-fixture {
  display: flex;
  align-items: center;
  justify-content: center;

  .fixture-detail {
    width: 234px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;

    .team {
      display: flex;

      .team-name {
        display: flex;
        gap: 6px;
        width: 180px;
      }
    }
  }

  img.team-logo {
    width: 20px;
  }

  .fixture-date {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
