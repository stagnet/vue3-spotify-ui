<script setup lang="ts">
</script>

<template>
  <section class="side-nav__content">
    <div class="side-nav__card">
      <p class="side-nav__card-title">
        <slot name="title"></slot>
      </p>
      <span class="side-nav__card-subtitle">
        <slot name="subtitle"></slot>
      </span>
    </div>
    <div class="side-nav__button">
      <button>
        <slot name="button-text"></slot>
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.side-nav {
  &__content {
    background: #383838;
    height: 200px;
    border: none;
    border-radius: 8px;
    padding: 16px 20px;
    margin: 20px 0;
  }

  &__card-title {
    font-size: 16px;
    font-weight: bold;
  }

  &__card-subtitle {
    font-size: 14px;
    font-weight: 500;
  }

  &__button {
    margin-top: 15px;

    button {
      background-color: #fff;
      color: #000;
      font-weight: bold;
      font-size: 14px;
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
        background: #8e9eab;
        background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);
        background: linear-gradient(to right, #eef2f3, #8e9eab);
        transform: scale(1.05);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
