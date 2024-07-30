<!-- This page displays ALL the research projects -->

<script setup>
import { ref, computed } from "vue";
import cosmic from "../../../utils/cosmic";
const { objects: posts } = await cosmic.objects
  .find({
    type: "blog-posts",
  })
  .props("title,metadata.image,metadata.content,slug");

const router = useRouter();

// Helper function to get the truncated content
function getTruncatedContent(content, length) {
  return content.length > length
    ? content.substring(0, length) + "..."
    : content;
}

// Helper function to get the image URL
function getImage(URL) {
  return `${URL}?w=500&auto=format,compression`;
}

// Navigate to the BlogPost component
// function navigateToPost(slug) {
//   router.push({ path: `/post/${slug}` });
// }
</script>

<template>
  <div>
    <div class="research-post" v-for="post in posts" :key="post.title">
      <h1>
        <div class="new">{{ post.title }}</div>
      </h1>
      <div>
        <img
          class="research-post-img"
          :src="getImage(post.metadata.image.imgix_url)"
          :alt="post.title"
        />
      </div>
      <div>
        <div v-html="getTruncatedContent(post.metadata.content, 200)"></div>
        <a class="project-link" :href="`/research/detail?slug=${post.slug}`">
          Read More
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~/assets/styles/research";
</style>
