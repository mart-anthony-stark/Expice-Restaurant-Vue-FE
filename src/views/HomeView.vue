<template>
  <div class="home">
    <div class="right-overlay"></div>
    <div class="left">
      <div>
        <h1 class="large">Food</h1>
        <div class="tagline">
          <h1>Discover Restaurant</h1>
          <h1>& Delicious Food</h1>
        </div>
      </div>
      <Search-Bar />
    </div>
    <aside>
      <img
        class="plate"
        src="../assets/hero/delicious-food.svg"
        alt="Delicious food"
      />
      <img class="bg-vector lettuce" src="../assets/hero/lettuce.svg" alt="" />
      <img class="bg-vector dots" src="../assets/hero/bg-vector.svg" alt="" />
    </aside>
  </div>
  <about-banner />
  <advance-booking />
  <our-services />
  <food-menu />
  <download-app />
  <footer-section />
</template>

<script setup>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import AboutBanner from "@/components/AboutBanner.vue";
import AdvanceBooking from "@/components/AdvanceBooking.vue";
import OurServices from "@/components/OurServices.vue";
import FoodMenu from "@/components/FoodMenu.vue";
import DownloadApp from "@/components/DownloadApp.vue";
import FooterSection from "@/components/FooterSection.vue";

import store from "@/store";
import { onMounted, onUnmounted } from "@vue/runtime-core";

const scroll = () => {
  const setTop = window.pageYOffset == 0;
  store.commit("setNavOnTop", setTop);
};
onMounted(() => {
  window.addEventListener("scroll", scroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scroll);
});
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  background: $complementary;

  .right-overlay {
    position: absolute;
    height: 100%;
    width: 25%;
    right: 0;
    background: $primary;
  }

  .left {
    @include center();
    flex-direction: column;
    gap: 30px;

    .large {
      font-size: 10rem;
      color: rgb(182, 182, 182);
      margin-left: -5px;
    }

    .tagline {
      font-size: 1.5rem;
      color: $secondary;
      margin-top: -60px;
    }
  }

  aside {
    @include center();
    z-index: 1;
    position: relative;
    overflow: hidden;

    .plate {
      max-width: 520px;
    }

    .bg-vector {
      position: absolute;
      z-index: -1;
      /* max-height: 100vh; */
      top: -80px;

      &.lettuce {
        height: 400px;
        top: 10px;
      }

      &.dots {
        top: 100px;
        left: -15px;
        z-index: -2;
      }
    }
  }

  @media (max-width: 1080px) {
    .large {
      font-size: 6rem !important;
    }
    .tagline {
      margin-top: -40px !important;
    }
    .plate {
      width: 420px;
    }
  }
}
</style>