<template>
  <div>
    <main>
      <NavbarResearch />
      <heroImage />

      <ResearchProject />

      <NuxtPage />
      <div id="contact">
        <contactForm />
        <footerComponent />
        <NuxtPage />
      </div>
    </main>
  </div>
</template>

<script setup>
import NavbarResearch from "~/components/navbar/navbarResearch.vue";
import heroImage from "~/components/other/heroImage.vue";
import ResearchProject from "~/components/CMS/research/ResearchProject.vue";

import contactForm from "~/components/other/contactForm.vue";
import footerComponent from "~/components/other/footerComponent.vue";
</script>

<style scoped></style>
