<script setup>
defineOptions({
  name: "MainToolbar",
});
// imports
import { useAppPropertyStore } from "stores/AppProperty";
// variables
const appProperties = useAppPropertyStore();
// functions
</script>
<template>
  <q-toolbar>
    <q-btn
      dense
      flat
      padding="sm md"
      square
      @click="appProperties.toggleLeftDrawer()"
    >
      <q-icon name="bi-list" />
    </q-btn>
    <q-separator color="on_primary" inset vertical />
    <q-btn dense flat padding="sm md" square>
      <q-icon name="bi-house" @click="$router.replace('/')" />
    </q-btn>
    <q-btn dense flat padding="sm md" square>
      <q-icon color="accent" name="bi-star" />
    </q-btn>
    <q-toolbar-title>
      <q-avatar></q-avatar>
    </q-toolbar-title>
    <q-space></q-space>
    <q-tabs align="left">
      <q-route-tab label="components" to="/components" />
      <q-route-tab label="graphs" to="/graphs" />
      <q-route-tab label="weather" to="/weather" />
      <q-route-tab label="axios" to="/axios" />
    </q-tabs>
    <q-space></q-space>
    <q-separator color="$on_primary" inset vertical />
    <q-btn
      dense
      flat
      padding="sm md"
      square
      @click="appProperties.toggleRightDrawer()"
    >
      <q-icon name="bi-sliders" />
    </q-btn>
  </q-toolbar>
</template>

<style scoped></style>
