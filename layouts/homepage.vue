<template>
  <heroImage />

  <div class="cards">
    <CardContainer />
  </div>
  <div id="contact">
    <contactForm />
    <footerComponent />
    <NuxtPage />
  </div>
</template>

<script setup>
import heroImage from "~/components/other/heroImage.vue";
import CardContainer from "~/components/hero/CardContainer.vue";

import contactForm from "~/components/other/contactForm.vue";
import footerComponent from "~/components/other/footerComponent.vue";
</script>

<style scoped lang="scss">
#contact {
  margin-top: 1em;
}
</style>
