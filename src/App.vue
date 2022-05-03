<template>
  <Nav-Bar />
  <router-view />
</template>

<script setup>
/* eslint-disable */
import NavBar from "@/components/NavBar.vue";
import { onMounted } from "@vue/runtime-core";

import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

::-webkit-scrollbar {
  width: 15px;
  background: $primary;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
}
button {
  cursor: pointer;
}

section {
  min-height: 100vh;
}
</style>
