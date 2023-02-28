<template>
  <SectionVSheet>
    <div class="stats-description">
      <h1 class="stats-description-title">
        <slot name="title" />
      </h1>
      <slot name="content" />
    </div>
  </SectionVSheet>
</template>

<style scoped>

h1.stats-description-title {
  font-size: 14px;
  margin-bottom: 12px;
}

div.stats-description {
  padding: 14px;
  height: 142px;
}
</style>
