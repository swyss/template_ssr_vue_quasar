<script setup>
defineOptions({
  name: "RightDrawer",
});
// imports
import { useAppPropertyStore } from "stores/app-properties";
import { useAppMenuStore } from "stores/app-menu";
// variables
const app_properties = useAppPropertyStore();
const app_menus = useAppMenuStore();

// functions
function handleClick(menuItem) {
  console.log(menuItem);
}
</script>

<template>
  <q-drawer
    v-model="app_properties.rightDrawerOpen"
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    elevated
    overlay
    side="right"
  >
    <q-scroll-area class="fit">
      <q-list>
        <template
          v-for="(menuItem, index) in app_menus.rightMenuList"
          :key="index"
        >
          <q-item
            v-ripple
            :active="menuItem.label === 'Outbox'"
            clickable
            to="menuItem.link"
          >
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
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
