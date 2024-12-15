<script setup>
import { ref } from 'vue'
import HomeCard from '@/components/HomeCard.vue';

const featuredAlbums = ref([
  {
    url: '/album-arts/album-art-1.jpg',
    title: 'Pain',
    subTitle: 'by Ryan Jones'
  },
  {
    url: '/album-arts/album-art-2.jpg',
    title: 'The Stranger Inside You',
    subTitle: 'by Jeanne Lebras'
  },
  {
    url: '/album-arts/album-art-3.jpg',
    title: 'Track Name',
    subTitle: 'Artist Name'
  },
  {
    url: '/album-arts/album-art-4.jpg',
    title: 'Song Title',
    subTitle: 'Prod Name'
  },
  {
    url: '/album-arts/album-art-5.jpg',
    title: 'Song Name',
    subTitle: 'Artist Name'
  },
  {
    url: '/album-arts/album-art-6.mp4',
    title: 'Song Name',
    subTitle: 'Artist Name'
  }
])

const mixedAlbums = ref([
  {
    url: '/album-arts/album-art-7.mp4',
    title: 'Crown',
    subTitle: 'by King'
  },
  {
    url: '/album-arts/album-art-8.jpg',
    title: 'Mountains',
    subTitle: 'by Luke Martin'
  },
  {
    url: '/album-arts/album-art-9.jpg',
    title: 'Song Name',
    subTitle: 'Artist Name'
  },
  {
    url: '/album-arts/album-art-10.mp4',
    title: 'G.O.A.T',
    subTitle: 'Prod Name'
  },
  {
    url: '/album-arts/album-art-11.jpg',
    title: 'Silent',
    subTitle: 'by Vol. 1'
  },
  {
    url: '/album-arts/album-art-12.jpg',
    title: 'Chillnaut',
    subTitle: 'Artist Name'
  }
])

</script>

<template>
  <div class="home-view">
    <h3 class="home-view__title">Forgotten favorites</h3>
    <div class="home-view__featured-row">
      <HomeCard v-for="album in featuredAlbums" :url="album.url" :title="album.title" :subTitle="album.subTitle" />
    </div>

    <h3 class="home-view__title">Mixed marathon</h3>
    <div class="home-view__mixed-row">
      <HomeCard v-for="album in mixedAlbums" :url="album.url" :title="album.title" :subTitle="album.subTitle" />
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
    display: flex;
    overflow-x: scroll;
    padding: 10px 5px;
  }
}
</style>
