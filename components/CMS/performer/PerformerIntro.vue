<template>
  <div class="card">
    <div v-for="intro in intros" :key="intro._id" class="card-content">
      <h2>Violinist</h2>
      <!-- Text taken from Cosmic JS -->

      <div class="performer-intro-text">{{ intro.metadata.text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Connect to Cosmic JS
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
@import "~/assets/styles/main";
@import "~/assets/styles/card";

//scoped style overriding the card style in the card.scss file
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $small-padding-margin;
  margin-bottom: $small-padding-margin;
}
</style>
