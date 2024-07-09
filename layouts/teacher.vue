<template>
  <div>
    <main>
      <navbarTeacher />
      <heroImage />

      <NuxtPage />
      <div class="contact">
        <contactForm />
        <footerComponent />
        <NuxtPage />
      </div>
    </main>
  </div>
</template>

<script setup>
import heroImage from "~/components/other/heroImage.vue";

import navbarTeacher from "~/components/navbar/navbarTeacher.vue";

import contactForm from "~/components/other/contactForm.vue";
import footerComponent from "~/components/other/footerComponent.vue";
</script>

<style scoped></style>
