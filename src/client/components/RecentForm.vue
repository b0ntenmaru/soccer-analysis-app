<script setup lang="ts">
type Props = {
  recentForm: string;
}
const props = defineProps<Props>();

const displayRecentForm = computed(() => {
  const arr = [...props.recentForm];
  return arr;
});

const generateColor = (displayRecentFormItem: string) => {
  if (displayRecentFormItem === 'W') {
    return {
      background: 'rgb(21, 177, 104)',
      color: '#fff'
    };
  }

  if (displayRecentFormItem === 'L') {
    return {
      background: 'rgb(199, 54, 31)',
      color: '#fff'
    };
  }

  if (displayRecentFormItem === 'D') {
    return {
      background: 'rgb(164, 169, 179)',
      color: '#fff'
    };
  }
};

</script>

<template>
  <div class="display-recent-form">
    <div v-for="(item, i) in displayRecentForm" :key="i" :style="generateColor(item)" class="displayRecentFormItem">
      {{ item }}
    </div>
  </div>
</template>

<style scoped>
div.display-recent-form {
  display: flex;
}

div.displayRecentFormItem {
  width: 26px;
  font-weight: bold;
  padding: 4px;
  text-align: center;
}
</style>
