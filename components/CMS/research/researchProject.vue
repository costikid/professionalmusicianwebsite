<!-- blog post that includes an image, title and text to describe the research projects -->
<script setup lang="ts">
import { createBucketClient } from "@cosmicjs/sdk";
const cosmic = createBucketClient({
  bucketSlug: process.env.BUCKET_SLUG || "",
  readKey: process.env.BUCKET_READ_KEY || "",
});
const { objects: posts } = await cosmic.objects
  .find({
    type: "blog-posts",
  })
  .props("title,metadata.image,metadata.content");

function getImage(URL: string) {
  return `${URL}?w=500&auto=format,compression`;
}
</script>

<template>
  <div>
    <div v-for="post in posts" v-bind:key="post.title">
      <div>{{ post.title }}</div>
      <div>
        <img
          :src="getImage(post.metadata.image.imgix_url)"
          alt="{{ post.title }}"
        />
      </div>
      <div>{{ post.metadata.content }}</div>
    </div>
  </div>
</template>
