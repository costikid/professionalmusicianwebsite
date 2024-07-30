<template>
  <div>
    <main>
      <NavbarResearch />
      <heroImage />

      <ResearchProjectMain />

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
import ResearchProjectMain from "~/components/CMS/research/ResearchProjectMain.vue";

import contactForm from "~/components/other/contactForm.vue";
import footerComponent from "~/components/other/footerComponent.vue";
</script>

<style scoped></style>
