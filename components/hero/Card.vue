<!-- parent component for the cards in homepage. Each card has an image, title, paragraph and button -->

<template>
  <div class="card">
    <img :src="imageSrc" :alt="`${title} Image`" class="card-image" />
    <div class="card-content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>

      <a :href="linkTo" class="card-button">{{ linkText }}</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  imageSrc: String,
  description: String,
  linkTo: String,
  linkText: String,
});
</script>

<style lang="scss">
@import "~/assets/styles/main";
@import "~/assets/styles/card";
a {
  text-decoration: none;
}

p {
  padding: 1em;
}
</style>
