<script setup>
import { ref, computed } from 'vue';
import cosmic from "../../../utils/cosmic"
const { objects: posts } = await cosmic.objects
  .find({
    type: 'blog-posts'
  })
  .props('title,metadata.image,metadata.content,slug');

const router = useRouter();

// Helper function to get the truncated content
function getTruncatedContent(content, length) {
  return content.length > length ? content.substring(0, length) + '...' : content;
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
    <div v-for="post in posts" :key="post.title">
      <div>{{ post.title }}</div>
      <div>
        <img :src="getImage(post.metadata.image.imgix_url)" :alt="post.title" />
      </div>
      <div>
        <div v-html="getTruncatedContent(post.metadata.content, 200)"></div>
        <a :href="`/research/detail?slug=${post.slug}`">
          Read More
        </a>
      </div>
    </div>
  </div>
</template>
