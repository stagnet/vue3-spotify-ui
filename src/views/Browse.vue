<script setup>
import { ref } from 'vue'
import BrowseCard from '@/components/BrowseCard.vue';

const Browse = ref([
  {
    url: '/browse/art-1.jpeg',
    title: 'Music',
  },
  {
    url: '/browse/art-2.jpeg',
    title: 'Podcasts',
  },
  {
    url: '/browse/art-3.jpg',
    title: 'Live Events',
  },
])

const BrowseAll = ref([
  {
    url: '/browse/art-4.jpeg',
    title: '2024 in Music',
  },
  {
    url: '/browse/art-5.jpeg',
    title: '2024 in Podcast',
  },
  {
    url: '/browse/art-6.jpeg',
    title: 'New Release',
  },
  {
    url: '/browse/art-7.jpeg',
    title: 'Punjabi',
  },
  {
    url: '/browse/art-8.jpeg',
    title: 'Tamil Hits',
  },
  {
    url: '/browse/art-9.jpeg',
    title: 'Hindi',
  },
])

</script>

<template>
  <div class="home-view">
    <h3 class="home-view__title">Start Browsing</h3>
    <div class="home-view__featured-row">
      <BrowseCard v-for="album in Browse" :url="album.url" :title="album.title" />
    </div>

    <h3 class="home-view__title">Browse all</h3>
    <div class="home-view__mixed-row">
      <BrowseCard v-for="album in BrowseAll" :url="album.url" :title="album.title" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-view {
  width: calc(100% - 350px);
  background: #000000;
  background: -webkit-linear-gradient(to top, #434343, #000000);
  background: linear-gradient(to top, #434343, #000000);
  color: #fff;
  padding: 1.5rem;
  height: 100vh;
  border: none;
  border-radius: 10px;
  margin: 10px 5px;

  &__featured-row {
    display: flex;
    overflow-x: scroll;
    padding: 10px 5px;
  }

  &__title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  &__mixed-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 15px;
  }
}
</style>
