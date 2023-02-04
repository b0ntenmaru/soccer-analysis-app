<script setup lang="ts">
type Props = {
  seasonId: number;
}
const props = defineProps<Props>();
const { data: seasonStandingsData, pending } = await useFetch(`/api/v1/standings/season/${props.seasonId}`);

watch(() => props.seasonId, async () => {
  const { data } = await useFetch(`/api/v1/standings/season/${props.seasonId}`);
  seasonStandingsData.value = data.value;
});

const columns = [
  {
    title: '#',
    dataIndex: '#',
    key: '#'
  },
  {
    title: 'Team',
    dataIndex: 'Team',
    key: 'Team'
  },
  {
    title: 'Won',
    dataIndex: 'Won',
    key: 'Won'
  },
  {
    title: 'Draw',
    dataIndex: 'Draw',
    key: 'Draw'
  },
  {
    title: 'Lost',
    dataIndex: 'Lost',
    key: 'Lost'
  },
  {
    title: 'Goal',
    dataIndex: 'Goal',
    key: 'Goal'
  },
  {
    title: 'Last 5',
    dataIndex: 'Last 5',
    key: 'Last 5'
  },
  {
    title: 'Points',
    dataIndex: 'Points',
    key: 'Points'
  }
];
</script>

<template>
  <div>
    <div v-for="seasonStandings in seasonStandingsData" :key="seasonStandings.id">
      <h1>{{ seasonStandings.name }}</h1>
      <a-table
        :columns="columns"
        :data-source="seasonStandings.standings.data"
        :pagination="false"
        size="small"
        :loading="pending"
        class="standings-table"
        :scroll="{x: true}"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === '#'">
            {{ record.position }}
          </template>

          <template v-if="column.key === 'Team'">
            <a-avatar :src="record.team.data.logo_path" />
            {{ record.team_name }}
          </template>

          <template v-if="column.key === 'Won'">
            {{ record.overall.won }}
          </template>

          <template v-if="column.key === 'Draw'">
            {{ record.overall.draw }}
          </template>

          <template v-if="column.key === 'Lost'">
            {{ record.overall.lost }}
          </template>

          <template v-if="column.key === 'Goal'">
            {{ record.overall.goals_scored }}
          </template>

          <template v-if="column.key === 'Last 5'">
            <RecentForm :recent-form="record.recent_form" />
          </template>

          <template v-if="column.key === 'Points'">
            {{ record.points }}
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<style lang="scss">
</style>
