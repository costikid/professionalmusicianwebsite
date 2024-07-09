<template>
  <footer class="footer">
    <div class="footer-content">
      <SocialMediaIcons />
      <p>© 2024 Janell Yeo</p>
    </div>
  </footer>
</template>

<script setup>
import SocialMediaIcons from "~/components/other/SocialMediaIcons.vue";
</script>

<style scoped lang="scss">
@import "~/assets/styles/variables";

.footer {
  background-color: $green-1;
  color: $light;
  padding: 1em;
  text-align: center;
  margin-top: 1em;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin: 0;
    }
  }
}
</style>
