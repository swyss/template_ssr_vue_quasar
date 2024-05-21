<script setup>
import {ref} from "vue";

defineOptions({
  name: "TitleToolbar",
});
// imports
import { useAppPropertyStore } from "stores/app-properties";
import { useAppInfoStore } from "stores/app-info";
import UserLogin from "pages/user/LoginPage.vue";
import InfoPage from "pages/general/InfoPage.vue";
// variable
const appProperties = useAppPropertyStore();
const appInfos = useAppInfoStore();
const loginInception= ref(false)
const infoInception= ref(false)
// functions
function clickLoginBtn()
{
  loginInception.value = true;
}
function clickInfoBtn()
{
  infoInception.value = true;
  appInfos.printInfo();
}
</script>
<template>
  <q-toolbar>
    <q-toolbar-title>
      <q-avatar>

      </q-avatar>
      Title
    </q-toolbar-title>
    <q-space></q-space>
    <q-btn padding="sm md" dense flat square @click="clickLoginBtn">
      <q-icon name="bi-person-square" />
    </q-btn>
    <q-dialog v-model="loginInception">
      <user-login></user-login>
    </q-dialog>
    <q-btn padding="sm" dense flat square @click="clickInfoBtn">
      <q-icon name="bi-info-circle" />
    </q-btn>
    <q-dialog v-model="infoInception" persistent transition-show="scale" transition-hide="scale">
      <info-page></info-page>
    </q-dialog>
    <q-btn padding="sm" dense flat square @click="appProperties.toggleDarkMode"
    ><q-icon name="bi-moon-stars"
    /></q-btn>
  </q-toolbar>
</template>
<style scoped></style>
