<template>
  <div class="navbar" :class="{ onTop }">
    <h1>expice</h1>

    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/">About</router-link>
      <router-link to="/">Menu</router-link>
      <router-link to="/">Contact</router-link>
    </div>

    <div class="right">
      <img src="../assets/hero/user-icon.svg" alt="" />
      Mart Anthony
    </div>
  </div>
</template>

<script setup>
const { default: store } = require("@/store");
const { computed } = require("@vue/runtime-core");

const onTop = computed(() => store.state.navOnTop);
</script>


<style lang="scss" scoped>
.navbar {
  @include center();
  justify-content: space-between;
  padding: 0 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  color: #fff;
  background: $primary;
  z-index: 999;
  transition: 0.5s ease;

  &.onTop {
    background: none;
    color: $primary;
  }

  h1 {
    font-size: 2rem;
  }

  .menu {
    display: flex;
    gap: 25px;
    a {
      color: $secondary;
      text-decoration: none;
      font-weight: bold;
    }
  }

  .right {
    @include center();
    color: #fff;
    gap: 10px;
  }
}
</style>