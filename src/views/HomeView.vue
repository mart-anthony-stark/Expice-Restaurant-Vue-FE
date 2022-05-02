<template>
  <div class="home">
    <div class="right-overlay"></div>
    <!-- <img src="" alt=""> -->
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
</template>

<script setup>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  background: #fff5ec;

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
}
</style>