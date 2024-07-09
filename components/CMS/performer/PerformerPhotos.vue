<template>
  <div class="performer-images">
    <div
      v-for="(performerImage, imageIndex) in performerImages"
      :key="performerImage._id"
      class="performer-image"
    >
      <template v-for="index in 4">
        <div v-if="performerImage.metadata[`performerimage${index}`]">
          <img
            :src="
              getImage(
                performerImage.metadata[`performerimage${index}`].imgix_url
              )
            "
            :alt="`${performerImage.title} Image ${index}`"
            class="performer-image-item"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
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
    "metadata.performerimage1, metadata.performerimage2, metadata.performerimage3, metadata.performerimage4"
  );

function getImage(URL: string) {
  return `${URL}?w=500&auto=format,compression`;
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.performer-image {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: $small-padding-margin;
  box-shadow: $box-shadow;
}

.performer-image-item {
  max-width: 100%;
}

@media (max-width: $breakpoint-md) {
  .performer-image {
    flex-direction: column;
    align-items: center;
  }
}
</style>
