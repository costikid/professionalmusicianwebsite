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
      "https://res.cloudinary.com/dpcy1ezvt/image/upload/v1706365565/rent_mqsvmr.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    linkTo: "/performer",
    linkText: "Book me",
  },
  {
    title: "Researcher",
    imageSrc:
      "https://res.cloudinary.com/dpcy1ezvt/image/upload/v1714387309/ritmo_music_meta_image_gtmptv.jpg",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    linkTo: "/research",
    linkText: "View my work",
  },
  {
    title: "Pedagogy",
    imageSrc:
      "https://res.cloudinary.com/dpcy1ezvt/image/upload/v1714387309/ritmo_music_meta_image_gtmptv.jpg",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    linkTo: "/teacher",
    linkText: "Details",
  },
];
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.card-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (min-width: $breakpoint-md) {
  .card-container {
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
