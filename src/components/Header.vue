<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import MenuItem from './MenuItem.vue';
import Magnify from "vue-material-design-icons/Magnify.vue"
import Account from "vue-material-design-icons/Account.vue"
import MusicNotePlus from 'vue-material-design-icons/MusicNotePlus.vue'
import Cog from "vue-material-design-icons/Cog.vue"
import Logout from "vue-material-design-icons/Logout.vue"
import BellOutline from 'vue-material-design-icons/BellOutline.vue'

const router = useRouter();
const route = useRoute();

let isMenuActive = ref(false);
let isLibraryActive = ref(false);

const menuOptions = [
  { title: 'Account', icon: Account, url: '/account' },
  { title: 'Upgrade', icon: MusicNotePlus, url: '/premium' },
  { title: 'Settings', icon: Cog, url: '/settings' },
  { title: 'Logout', icon: Logout, url: '/' },
];
const openMenu = () => {
  isMenuActive.value = !isMenuActive.value
}

const goToBrowse = () => {
  isLibraryActive.value = !isLibraryActive.value

  if (isLibraryActive.value) {
    router.push('/browse')
  } else {
    router.push('/')
  }
}

onMounted(() => {
  console.log(route.fullPath);

  if (route.fullPath === '/') {
    isLibraryActive.value = false
  }
  else {
    isLibraryActive.value = true
  }
})
</script>

<template>
  <header class="header">
    <div class="header_left">
      <img src="/images/icons/spotify-icon-logo.svg" alt="Logo" class="header__logo">
    </div>

    <div class="header_center">
      <div class="home_button">
        <img src="/images/icons/home-angle.svg" alt="Logo">
      </div>
      <div class="search_bar">
        <Magnify :size="30" class="search_icon" />
        <input type="search" placeholder="What do you want to play?">
        <div class="vertical"></div>
        <div class="browse_icon" @click="goToBrowse" title="Browse">
          <img v-if="!isLibraryActive" src="/images/icons/album-icon.svg" alt="Browse">
          <img v-else src="/images/icons/album-icon-filled.svg" alt="Browse-active">
        </div>
      </div>
    </div>

    <div class="header__right">
      <div class="premium_button">
        <button>Explore Premium</button>
      </div>
      <div class="notification">
        <BellOutline :size="24" />
      </div>
      <div class="avatar_wrapper">
        <button @click="openMenu" class="avatar_button">A</button>
      </div>
    </div>
  </header>
  <MenuItem :options="menuOptions" v-if="isMenuActive" />
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  color: #fff;
  font-family: Arial, sans-serif;
  padding: 8px;

  &__logo {
    height: 52px;
    width: 52px;
  }

  &_center {
    display: flex;
    align-items: center;
    margin-left: 13%;

    .home_button {
      background-color: #222;
      border-radius: 50%;
      padding: 0.25rem 0.6rem;

      img {
        height: 32px;
        width: 32px;
        margin-top: 0.3rem;
      }
    }

    .search_bar {
      display: flex;
      align-items: center;
      background-color: #222;
      border-radius: 30px;
      padding: 0.15rem 0.7rem;
      margin-left: 10px;

      .vertical {
        border-left: 1px solid #b3b3b3;
        height: 25px;
        margin-right: 10px;
      }

      .search_icon {
        padding-top: 10px;
        padding-right: 10px;
        color: #b3b3b3;
      }

      input {
        border: none;
        background: transparent;
        color: #fff;
        outline: none;
        font-size: 0.9rem;
        width: 400px;

        &::placeholder {
          color: #888;
          font-size: 16px;
          font-weight: 500;
        }
      }

      .browse_icon {
        cursor: pointer;
        margin-top: 0.5rem;
      }
    }
  }

  &__right {
    display: flex;
    align-items: center;

    .notification {
      margin-left: 15px;
    }

    .premium_button {
      button {
        background-color: #fff;
        color: #000;
        font-weight: bold;
        font-size: 16px;
        border: none;
        border-radius: 50px;
        padding: 10px 20px;
        cursor: pointer;
        outline: none;
        transition:
          background 0.3s ease,
          color 0.3s ease,
          transform 0.2s ease,
          box-shadow 0.2s ease;

        &:hover {
          background: linear-gradient(90deg, #1DB954, #1ED760);
          color: #fff;
          transform: scale(1.05);
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
        }
      }
    }

    .avatar_wrapper {
      background: #222222;
      border: none;
      border-radius: 60%;
      padding: 8px;
      margin-left: 15px;
    }

    .avatar_button {
      background: #509bf5;
      border: none;
      border-radius: 50%;
      padding: 10px 14px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      font-size: 16px;
      font-weight: bolder;

      &:hover {
        background: linear-gradient(90deg, #1DB954, #1ED760);
        color: #fff;
        transform: scale(1.05);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
      }
    }
  }

}
</style>
