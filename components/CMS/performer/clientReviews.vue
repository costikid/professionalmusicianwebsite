<template>
  <div class="quotes">
    <div class="quote" v-for="review in reviews" :key="review._id">
      <blockquote>
        <p>{{ review.metadata.content }}</p>
        <footer>- {{ review.metadata.name }}</footer>
      </blockquote>
    </div>
  </div>
</template>

<script setup>
//fetches reviews from cosmic JS
import cosmic from "../../../utils/cosmic"

const { objects: reviews } = await cosmic.objects
  .find({
    type: "client-reviews",
  })
  .props("metadata.content, metadata.name");
</script>

<style scoped lang="scss">
@import "~/assets/styles/reviews";
</style>
