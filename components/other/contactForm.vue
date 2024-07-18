<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <h1>Get in touch</h1>

    <div class="form-group">
      <label for="name">Name *</label>
      <input
        type="text"
        id="name"
        v-model="formData.name"
        required
        aria-label="Name"
      />
    </div>

    <div class="form-group">
      <label for="surname">Surname *</label>
      <input
        type="text"
        id="surname"
        v-model="formData.surname"
        required
        aria-label="Surname"
      />
    </div>

    <div class="form-group">
      <label for="email">Email *</label>
      <input
        type="email"
        id="email"
        v-model="formData.email"
        required
        aria-label="Email"
      />
    </div>

    <div class="form-group">
      <label for="phone">Phone</label>
      <input
        type="tel"
        id="phone"
        v-model="formData.phone"
        aria-label="Phone number"
      />
    </div>

    <div class="form-group">
      <label for="message">Message *</label>
      <textarea
        id="message"
        v-model="formData.message"
        rows="4"
        required
        aria-label="Message"
      ></textarea>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { FORMSPARK_ACTION_URL } from "@/utils/sendEmail";

const formData = ref({
  name: "",
  surname: "",
  email: "",
  phone: "",
  message: "",
});

const submitForm = async () => {
  try {
    const response = await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      resetForm();
      alert("Form submitted successfully!");
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Failed to submit form. Please try again later.");
  }
};

const resetForm = () => {
  formData.value = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  };
};
</script>

<style scoped lang="scss">
@import "~/assets/styles/contactForm";
</style>
