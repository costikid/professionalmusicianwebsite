<template>
  <div class="card-container">
    <Card
      v-for="card in cards"
      :key="card.title"
      :title="card.title"
      :imageSrc="card.imageSrc"
      :description="card.description"
      :linkTo="card.linkTo"
      :linkText="card.linkText"
    />
  </div>
</template>

<script setup>
import Card from "./Card.vue";

const cards = [
  {
    title: "Performer",
    imageSrc:
      "https://res.cloudinary.com/dpcy1ezvt/image/upload/v1721136003/pexels-roxanne-minnish-2936023-4513456_di92je.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    linkTo: "/performer",
    linkText: "Book me",
  },
  {
    title: "Researcher",
    imageSrc:
      "https://res.cloudinary.com/dpcy1ezvt/image/upload/v1721136001/pexels-charles-parker-6647625_jv8gka.jpg",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkTo: "/research",
    linkText: "View my work",
  },
  {
    title: "Pedagogy",
    imageSrc:
      "https://res.cloudinary.com/dpcy1ezvt/image/upload/v1721136134/pexels-alexandre-henry-alves-751544234-19070529_hzutkf.jpg",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    linkTo: "/teacher",
    linkText: "Details",
  },
];
</script>

<style lang="scss" scoped>
@import "~/assets/styles/card";
</style>
