<script setup lang="ts">

</script>

<template>
  <v-app id="inspire">
    <v-app-bar flat class="bg-blue-grey-darken-4">
      <v-container class="fill-height d-flex align-center">
        <v-btn link :to="`/`">
          ホーム
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="bg-blue-grey-lighten-5">
      <v-container style="width: 1100px" fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>

</style>
