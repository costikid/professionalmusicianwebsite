<template>
  <div class="navbar">
    <div class="hamburger" @click="toggleMenu" :class="{ open: menuOpen }">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <nav :class="{ open: menuOpen }">
      <ul>
        <slot name="nav-links"></slot>
      </ul>
      <div class="nav-left">
        <BaseButton :to="'#contact'" class="contact-button">Contact</BaseButton>
        <SocialMediaIcons class="social-media" />
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SocialMediaIcons from "@/components/other/SocialMediaIcons.vue";
import BaseButton from "@/components/other/BaseButton.vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables";
@import "~/assets/styles/main";

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $small-padding-margin;
  margin-bottom: $small-padding-margin;
  background-color: $green-1;
  box-shadow: $box-shadow;
  border-radius: 1em;

  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    align-items: flex-start;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 2rem;
    height: 2rem;

    @media (min-width: $breakpoint-md) {
      display: none;
    }

    .line {
      width: 100%;
      height: 2px;
      background-color: $light;
      margin: 2px 0;
      transition: transform $transition;

      &.open {
        &:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }
      }
    }
  }

  nav {
    display: flex;
    align-items: center;

    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      display: none;
      width: 100%;

      &.open {
        display: flex;
      }
    }

    .nav-left {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      width: 100%;
      padding: $small-padding-margin;

      @media (max-width: $breakpoint-md) {
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        width: auto;
      }

      .contact-button {
        margin-right: $small-padding-margin;

        @media (max-width: $breakpoint-md) {
          margin-right: 0;
          margin-bottom: $small-padding-margin;
        }
      }

      .social-media {
        @media (max-width: $breakpoint-md) {
          width: 100%;
        }
      }
    }

    ul {
      display: flex;
      list-style: none;

      @media (max-width: $breakpoint-md) {
        flex-direction: column;
        width: 100%;

        li {
          width: 100%;
          text-align: left;
        }
      }

      li {
        margin-right: $small-padding-margin;

        a {
          padding: $small-padding-margin;
          text-decoration: none;
          color: $light;
          transition: $transition;

          &:hover {
            color: darken($purple, 10%);
          }

          @media (max-width: $breakpoint-md) {
            padding: $small-padding-margin 0;
          }
        }
      }
    }
  }
}
</style>
