<template>
  <div>
    <form v-if="!isSubmitted" @submit.prevent="submitForm" class="contact-form">
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

      <BaseButton type="submit">Submit</BaseButton>
    </form>
    <div v-else class="thank-you-message">
      <h1>Thanks for getting in touch!</h1>
      <BaseButton @click="resetForm">Send Another Message</BaseButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "@/components/other/BaseButton.vue";
import { mockSendEmail } from "~/utils/mockSendEmail";

const formData = ref({
  name: "",
  surname: "",
  email: "",
  phone: "",
  message: "",
});

const isSubmitted = ref(false);

const submitForm = async () => {
  try {
    const response = await mockSendEmail(formData.value);
    console.log("Response:", response);
    isSubmitted.value = true;
  } catch (error) {
    console.error("Error sending email:", error);
    // Show error message to the user
    alert("Failed to send email. Please try again later.");
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
  isSubmitted.value = false;
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/contactForm";

h1 {
  text-align: center;
}

.thank-you-message {
  text-align: center;
  margin-top: 2em;
}
</style>
