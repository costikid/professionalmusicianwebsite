<!-- Card parent component. Child components vary in their 
             image, button text, title and description -->

<template>
  <div class="card">
    <img :src="imageSrc" :alt="`${title} Image`" class="card-image" />
    <div class="card-content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <button class="card-button" @click="navigateTo(linkTo)">
        {{ linkText }}
      </button>
    </div>
  </div>
</template>

<script setup>
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
</style>
