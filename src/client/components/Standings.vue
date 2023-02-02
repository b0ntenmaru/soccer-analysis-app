<script setup lang="ts">
type Props = {
  seasonId: number;
}
const props = defineProps<Props>();
const { data: standings } = await useFetch(`/api/v1/standings/season/${props.seasonId}`)

watch(() => props.seasonId, async () => {
  const { data } = await useFetch(`/api/v1/standings/season/${props.seasonId}`);
  standings.value = data.value;
});

</script>

<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center">
            <thead class="border-b bg-gray-50">
              <tr>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                  #
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                  Team
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                  Won
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                  Draw
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                  Lost
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                  Last 5
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                  Point
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b" v-for="s in standings.standings" v-if="standings">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ s.position }}
                </td>
                <td class="flex text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <img :src="s.team.logo_path" class="w-6 mr-1" />{{ s.team_name }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ s.overall.won }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ s.overall.draw }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ s.overall.lost }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ s.recent_form }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ s.points }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
