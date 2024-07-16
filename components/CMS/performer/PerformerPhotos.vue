<template>
  <div class="performer-images">
    <div
      v-for="(performerImage, imageIndex) in performerImages"
      :key="performerImage._id"
      class="performer-image"
    >
      <template
        v-for="(index, imgKey) in Object.keys(performerImage.metadata).filter(
          (key) => key.startsWith('performerimage')
        )"
      >
        <div v-if="performerImage.metadata[index]" class="image-container">
          <img
            :src="getImage(performerImage.metadata[index].imgix_url)"
            :alt="`${performerImage.title} Image ${index.replace(
              'performerimage',
              ''
            )}`"
            class="performer-image-item"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
// Dynamically fetch all metadata properties that start with "performerimage"

import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  bucketSlug: process.env.BUCKET_SLUG || "",
  readKey: process.env.BUCKET_READ_KEY || "",
});

const { objects: performerImages } = await cosmic.objects
  .find({
    type: "performer-images",
  })
  .props(
    // Dynamically fetch all metadata properties that start with "performerimage"
    Object.keys({ ...Array.from(Array(10).keys()) })
      .filter((index) => index.startsWith("metadata.performerimage"))
      .join(", ")
  );

function getImage(URL: string) {
  return `${URL}?w=500&auto=format,compression`;
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/images";
</style>
