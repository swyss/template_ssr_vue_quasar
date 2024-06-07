<script setup></script>

<template>
  <!-- progress bar-->
  <div class="q-pa-sm bg-blue">
    <q-ajax-bar
      ref="bar"
      color="accent"
      position="bottom"
      size="10px"
      skip-hijack
    />
  </div>
  <!-- footer -->
  <q-footer reveal elevated class="bg-grey-7 text-white"> footer </q-footer>
</template>

<style scoped></style>
