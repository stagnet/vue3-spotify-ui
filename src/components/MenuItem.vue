<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const router = useRouter()
const goTo = (url) => {
  router.push(url)
}

</script>

<template>
  <div class="menu-item">
    <ul style="padding: 0;">
      <li class="menu-item__link" v-for="option in props.options" @click="goTo(option.url)">
        <div class="menu-item__icon" v-if="option.icon">
          <component :is="option.icon" />
        </div>
        <span class="menu-item__text">{{ option.title }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.menu-item {
  position: fixed;
  z-index: 50;
  padding: 0.25rem;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 11px 7px -4px rgba(0, 0, 0, 0.25);
  width: 190px;
  background: #282828;
  top: 75px;
  right: 3px;

  &__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0.2rem;
    color: #fff;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
    }
  }

  &__text {
    font-size: 0.9rem;
    font-weight: 500;
    padding-right: 10px;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    color: #fff;
    font-size: 10px;
  }
}
</style>
