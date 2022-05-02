<template>
  <Nav-Bar />
  <router-view />
</template>

<script setup>
/* eslint-disable */
import NavBar from "@/components/NavBar.vue";
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
#app {
}
</style>
