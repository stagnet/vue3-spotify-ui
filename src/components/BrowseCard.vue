<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  url: String,
  title: String
})
const { url, title, } = toRefs(props)

</script>

<template>
  <div class="playlist-card">
    <img class="playlist-card__image" :src="url" :alt="title">
    <span class="playlist-card__text">{{ title }}</span>
  </div>
</template>

<style lang="scss" scoped>
.playlist-card {
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 145px;
  width: 100%;
  background-color: #111111;
  padding: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #252525;
    border-radius: 0.5rem;
  }

  &__image {
    position: absolute;
    right: 0;
    transform: rotate(25deg) translate(18%, -2%);
    height: 110px;
    width: 110px;
  }

  &__text {
    hyphens: auto;
    max-width: 100%;
    overflow-wrap: break-word;
    position: absolute;
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
