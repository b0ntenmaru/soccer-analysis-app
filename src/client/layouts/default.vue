<script setup lang="ts">
const state = reactive({
  links: [
    {
      icon: 'mdi-folder',
      title: 'リーグ一覧',
      path: '/leagues'
    }
  ]
});
</script>

<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer
        color="rgb(31 41 55 / 1)"
        theme="dark"
        style="position: fixed"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://pbs.twimg.com/profile_images/1615002913545547783/_geo1fcO_400x400.jpg"
            title="d4te74"
            subtitle="d4te74@email.com"
          />
        </v-list>

        <v-divider />

        <v-list density="compact" nav>
          <v-list-item
            v-for="(link, i) in state.links"
            :key="i"
            :prepend-icon="link.icon"
            :title="link.title"
            :value="link.title"
            :to="link.path"
          />
        </v-list>
      </v-navigation-drawer>

      <v-main class="main-content">
        <div class="main-content-container">
          <slot />
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped>
.main-content {
  background: #f1f3f8;
}

div.main-content-container {
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
