<template>
  <q-layout view="hHh lpR fFf">
    <!-- HEADER -->
    <app-header></app-header>
    <!-- DRAWERS -->
    <app-left-drawer></app-left-drawer>
    <app-right-drawer></app-right-drawer>
    <!-- CONTENTS -->
    <q-page-container>
      <div class="q-pa-md">
        <router-view />
      </div>
    </q-page-container>
    <!-- FOOTER -->
    <app-footer></app-footer>
  </q-layout>
</template>

<script>
import AppHeader from "layouts/header/AppHeader.vue";
import AppLeftDrawer from "layouts/drawers/AppLeftDrawer.vue";
import AppRightDrawer from "layouts/drawers/AppRightDrawer.vue";
import AppFooter from "layouts/footer/AppFooter.vue";

export default {
  components: { AppFooter, AppRightDrawer, AppLeftDrawer, AppHeader },
  setup() {},
};
</script>
