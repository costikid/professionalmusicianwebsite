<template>
  <div class="teacher-images">
    <div
      v-for="(teacherImage, imageIndex) in teacherImages"
      :key="teacherImage._id"
      class="teacher-image"
    >
      <template
        v-for="(index, imgKey) in Object.keys(teacherImage.metadata).filter(
          (key) => key.startsWith('teacherimage')
        )"
      >
        <div v-if="teacherImage.metadata[index]" class="image-container">
          <img
            :src="getImage(teacherImage.metadata[index].imgix_url)"
            :alt="`${teacherImage.title} Image ${index.replace(
              'teacherimage',
              ''
            )}`"
            class="teacher-image-item"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import cosmic from "../../../utils/cosmic"
const { objects: teacherImages } = await cosmic.objects
  .find({
    type: "teacher-images",
  })
  .props(
    // Dynamically fetch all metadata properties that start with "teacherimage"
    Object.keys({ ...Array.from(Array(10).keys()) })
      .filter((index) => index.startsWith("metadata.teacherimage"))
      .join(", ")
  );

function getImage(URL: string) {
  return `${URL}?w=500&auto=format,compression`;
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/images";
</style>
