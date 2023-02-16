<script setup lang="ts">

</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
      class="bg-blue-grey-darken-4"
      theme="dark"
      permanent
      width="200"
    >
      <v-list color="transparent">
        <v-list-item title="ホーム" link to="/" style="text-align: center" />
        <v-list-item title="リーグ" link style="text-align: center" />
        <v-list-item title="選手" link style="text-align: center" />
        <v-list-item title="監督" link style="text-align: center" />
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-blue-grey-lighten-5">
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
