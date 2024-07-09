<template>
  <div class="social-media">
    <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
      <img src="~/assets/images/facebook-icon.png" alt="Facebook logo" />
    </a>
    <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
      <img src="~/assets/images/instagram-icon.png" alt="Instagram logo" />
    </a>
    <a href="https://www.tiktok.com" target="_blank" aria-label="Tiktok">
      <img src="~/assets/images/tiktok-icon.png" alt="Tiktok logo" />
    </a>
  </div>
</template>
<style lang="scss" scoped>
@import "~/assets/styles/variables";

.social-media {
  display: flex;
}

.social-media img {
  max-width: 20px;
  padding: $small-padding-margin;
  transition: $transition;
}

.social-media img:hover {
  transform: translateY(-5px);
}
</style>
