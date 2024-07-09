<template>
  <button v-if="to" class="base-button" @click="$router.push(to)">
    <slot></slot>
  </button>
  <button v-else class="base-button">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  to: String,
});
</script>
<style lang="scss">
@import "~/assets/styles/main";
</style>
