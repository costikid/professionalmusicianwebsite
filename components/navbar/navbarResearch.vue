<!-- This is the navbar specific to the research page -->

<template>
  <ParentNavbar>
    <template #nav-links>
      <li><a href="/home">Home</a></li>
      <li><a href="/performer">Performer</a></li>
      <li><a href="/teacher">Pedagogy</a></li>
    </template>
  </ParentNavbar>
</template>

<script setup>
import ParentNavbar from "./navbarParent.vue";
</script>

<style scoped lang="scss">
@import "~/assets/styles/main";
@import "~/assets/styles/navbar";
</style>
