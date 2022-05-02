<template>
  <div class="search-bar">
    <input type="text" placeholder="Search Restaurant, Food" />
    <button>GO</button>
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  height: 60px;
  max-width: 450px;
  width: 100%;
  color: #fff;
  display: grid;
  background: #fff;
  grid-template-columns: 1fr 100px;

  input {
    height: calc(100% - 10px);
    color: none;
    border: none;
    padding: 20px;
    outline: none;
  }
  &:focus-within {
    outline: 1px solid $primary;
  }

  button {
    height: 100%;
    border: none;
    background: $primary;
    color: #fff;
    cursor: pointer;
    border-radius: 100% 0 0 0;
    font-weight: bold;
    font-size: 1.2rem;
  }
}
</style>

<script setup>
</script>