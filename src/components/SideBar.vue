<script setup>
import PlusCircle from 'vue-material-design-icons/PlusCircle.vue'
import NavCard from './NavCard.vue';
</script>

<template>
  <nav class="side-nav">
    <div class="side-nav__header">
      <img src="/images/icons/library-icon.svg" class="side-nav__action" />

      <h3 class="side-nav__title">Your Library</h3>
      <div class="side-nav__actions">
        <button class="side-nav__action" style="margin-top: 10px;">
          <PlusCircle :size="24" />
        </button>
      </div>
    </div>

    <NavCard>
      <template #title>
        Create your first playlist
      </template>
      <template #subtitle>
        It's easy, we'll help you
      </template>
      <template #button-text>
        Create playlist
      </template>
    </NavCard>

    <NavCard>
      <template #title>
        Let’s find some podcasts to follow
      </template>
      <template #subtitle>
        We’ll keep you updated on new episodes
      </template>
      <template #button-text>
        Browse podcasts
      </template>
    </NavCard>
  </nav>
</template>


<style lang="scss">
.side-nav {
  width: 330px;
  background: #000000;
  background: -webkit-linear-gradient(to top, #434343, #000000);
  background: linear-gradient(to top, #434343, #000000);
  color: #fff;
  padding: 1.5rem;
  height: 100vh;
  border: none;
  border-radius: 10px;
  margin: 10px 5px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  &__title {
    font-size: 1.2rem;
    font-weight: 700;
  }

  &__actions {
    display: flex;
    align-items: center;
  }

  &__action {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    margin-left: 1rem;
  }



}
</style>
