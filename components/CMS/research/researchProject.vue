<script setup lang="ts">
import { ref, computed } from "vue";
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

// State to track which post's content is expanded
const expandedPosts = ref<{ [key: string]: boolean }>({});

// Helper function to get the truncated content
function getTruncatedContent(content: string, length: number) {
  return content.length > length ? content.substring(0, length) + "..." : content;
}

// Helper function to get the image URL
function getImage(URL: string) {
  return `${URL}?w=500&auto=format,compression`;
}

// Toggle the expanded state of a post
function toggleContent(postTitle: string) {
  expandedPosts.value[postTitle] = !expandedPosts.value[postTitle];
}

</script>

<template>
  <div>
    <div v-for="post in posts" :key="post.title">
      <div>{{ post.title }}</div>
      <div>
        <img :src="getImage(post.metadata.image.imgix_url)" :alt="post.title" />
      </div>
      <div>
        <div v-html="expandedPosts[post.title] ? post.metadata.content : getTruncatedContent(post.metadata.content, 200)"></div>
        <button @click="toggleContent(post.title)">
          {{ expandedPosts[post.title] ? "Read Less" : "Read More" }}
        </button>
      </div>
    </div>
  </div>
</template>
