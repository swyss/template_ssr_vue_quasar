<template>
  <router-view />
  <BarChart></BarChart>
</template>

<script setup>
import BarChart from "pages/demos/DemoChartPage.vue";

defineOptions({
  name: "App",
});
</script>
