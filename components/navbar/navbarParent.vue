<!-- Parent component upon which the other navbars are based -->

<template>
  <div class="navbar">
    <div class="hamburger" @click="toggleMenu" :class="{ open: menuOpen }">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <nav :class="{ open: menuOpen }">
      <ul>
        <slot name="nav-links"></slot>
      </ul>
      <div class="nav-left">
        <BaseButton :to="'#contact'" class="contact-button">Contact</BaseButton>
        <SocialMediaIcons class="social-media" />
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SocialMediaIcons from "@/components/other/SocialMediaIcons.vue";
import BaseButton from "@/components/other/BaseButton.vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/main";
@import "~/assets/styles/navbar";
</style>
