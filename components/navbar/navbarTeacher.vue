<!-- This is the navbar specific to the pedagogy page -->

<template>
  <ParentNavbar>
    <template #nav-links>
      <li><a href="/home">Home</a></li>
      <li><a href="/performer">Performer</a></li>
      <li><a href="/research">Research</a></li>
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
