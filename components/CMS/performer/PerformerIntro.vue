<template>
  <div class="card">
    <div v-for="intro in intros" :key="intro._id" class="card-content">
      <h2>Violinist</h2>
      <div class="performer-intro-text">{{ intro.metadata.text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createBucketClient } from "@cosmicjs/sdk";

const bucketSlug = process.env.BUCKET_SLUG || "";
const readKey = process.env.BUCKET_READ_KEY || "";

const cosmic = createBucketClient({
  bucketSlug,
  readKey,
});

const { objects: intros } = await cosmic.objects
  .find({
    type: "performer-intros",
  })
  .props("metadata.text");
</script>

<style scoped lang="scss">
@import "~/assets/styles/fonts";
@import "~/assets/styles/main";

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $small-padding-margin;
  margin-bottom: $small-padding-margin;
}

.performer-intro-text {
  font-family: "LINESeedSans", sans-serif;
  text-align: center;
}
</style>
