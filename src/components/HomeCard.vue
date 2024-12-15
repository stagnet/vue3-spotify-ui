<script setup>
import { toRefs, computed } from 'vue'
import { RouterLink } from 'vue-router';

const props = defineProps({
  url: String,
  title: String,
  subTitle: String
})
const { url, title, subTitle } = toRefs(props)

const isVideo = computed(() => {
  return url.value.endsWith('.mp4');
});
</script>

<template>
  <RouterLink to="library">
    <div class="playlist-card">
      <video class="playlist-card__image" v-if="isVideo" autoplay loop muted playsinline>
        <source :src="url" type="video/mp4" />
      </video>
      <img v-else class="playlist-card__image" :src="url" :alt="title">
      <div class="playlist-card__title">{{ title }}</div>
      <div class="playlist-card__subtitle">{{ subTitle }}</div>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.playlist-card {
  height: 280px;
  width: 210px;
  background-color: #111111;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #252525;
    border-radius: 0.5rem;
  }

  &__image {
    border-radius: 0.5rem;
    height: 200px;
    width: 100%;
  }

  &__content {
    padding-top: 1rem;
  }

  &__title {
    color: #fff;
    font-weight: 600;
    font-size: 1.125rem;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    /* Prevent text from wrapping */
    overflow: hidden;
    /* Hide overflowing text */
    text-overflow: ellipsis;
    /* Add '...' at the end */
  }

  &__subtitle {
    color: #a0a0a0;
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
