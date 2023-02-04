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
        permanent
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

      <v-main style="background: #f1f3f8">
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>
