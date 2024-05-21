<script setup>
defineOptions({
  name: "AppHeader",
});
// imports
import TitleToolbar from "layouts/header/TitleToolbar.vue";
import MainToolbar from "layouts/header/HeaderMainToolbar.vue";
// variables

// functions
</script>

<template>
  <q-header class="bg-primary text-black" elevated height-hint="98" reveal>
    <title-toolbar></title-toolbar>
    <main-toolbar></main-toolbar>
    <!-- progress bar-->
    <div class="q-pa-md">
      <q-ajax-bar
        ref="bar"
        color="accent"
        position="bottom"
        size="10px"
        skip-hijack
      />
    </div>
  </q-header>
</template>

<style scoped></style>
