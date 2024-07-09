<template>
  <div>
    <main>
      <navbarPerformer />
      <heroImage />

      <PerformerIntro />
      <PerformerPhotos />

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
import navbarPerformer from "~/components/navbar/navbarPerformer.vue";
import heroImage from "~/components/other/heroImage.vue";

import PerformerIntro from "~/components/CMS/performer/PerformerIntro.vue";
import PerformerPhotos from "~/components/CMS/performer/PerformerPhotos.vue";

import contactForm from "~/components/other/contactForm.vue";
import footerComponent from "~/components/other/footerComponent.vue";
</script>

<style scoped></style>
