<template>
  <div>
    <main>
      <navbarTeacher />
      <heroImage />
      <TeacherIntro />
      <TeacherPhotos />

      <NuxtPage />
      <div id="contact">
        <contactForm />
        <footerComponent />
        <NuxtPage />
      </div>
    </main>
  </div>
</template>

<script setup>
import heroImage from "~/components/other/heroImage.vue";

import navbarTeacher from "~/components/navbar/navbarTeacher.vue";
import TeacherIntro from "~/components/CMS/teacher/TeacherIntro.vue";
import TeacherPhotos from "~/components/CMS/teacher/TeacherPhotos.vue";
import contactForm from "~/components/other/contactForm.vue";
import footerComponent from "~/components/other/footerComponent.vue";
</script>

<style scoped></style>
