<script setup>
import Header from './components/Header.vue';
import SideBar from './components/SideBar.vue';
</script>

<template>
  <div>
    <Header />

    <div class="main-view">
      <SideBar />
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-view {
  display: flex;
}
</style>
