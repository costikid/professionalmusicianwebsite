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
import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  bucketSlug: process.env.BUCKET_SLUG || "",
  readKey: process.env.BUCKET_READ_KEY || "",
});

const { objects: reviews } = await cosmic.objects
  .find({
    type: "client-reviews",
  })
  .props("metadata.content, metadata.name");
</script>

<style scoped lang="scss">
@import "~/assets/styles/reviews";
</style>
