<script setup>
defineOptions({
  name: "LeftDrawer",
});
// imports
import { useAppPropertyStore } from "stores/app-properties";
import { useAppMenuStore } from "stores/app-menu";
// variables
const app_properties = useAppPropertyStore();
const app_menus = useAppMenuStore();
// functions
</script>

<template>
  <q-drawer
    v-model="app_properties.leftDrawerOpen"
    bordered
    class="q-pa-sm q-pt-md"
    show-if-above
    side="left"
  >
    <q-scroll-area class="fit q-ptb-sm q-pl-sm">
      <q-list>
        <template v-for="(menuItem, index) in app_menus.leftMenuList" :key="index">
          <q-item v-ripple clickable to="menuItem.link" >
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" :color="'accent'"/>
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator v-if="menuItem.separator" :key="'sep' + index" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<style scoped></style>
