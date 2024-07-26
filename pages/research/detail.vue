<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <img :src="getImage(post.metadata.image.imgix_url)" :alt="post.title" />
    <div v-html="post.metadata.content"></div>
  </div>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import cosmic from "../../utils/cosmic"


const post = ref(null);
const route = useRoute();

const getImage = (URL) => {
  return `${URL}?w=500&auto=format,compression`;
};

const slug = route.query.slug;
console.log(slug);
const { objects } = await cosmic.objects
  .find({
    type: "blog-posts",
    slug,
  })
  .props("title,metadata.image,metadata.content");

post.value = objects[0];
</script>
  