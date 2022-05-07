<template>
  <section class="services">
    <div class="desc" data-aos="fade-left">
      <h1>
        <span>Our Services</span>
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        repellat quia repudiandae beatae autem quisquam architecto consectetur
        sit sequi iusto voluptatem nostrum, magnam blanditiis. At ad aspernatur
        qui maiores dicta quas ut, iure sequi harum rerum consectetur porro
        accusamus saepe deserunt, fugit vitae exercitationem explicabo, dolore
        vel tenetur esse quaerat?
      </p>
    </div>

    <div class="services-container">
      <div class="left">
        <div class="booking">
          <img src="../assets/services/booking.svg" alt="" />
        </div>
        <div class="food">
          <img src="../assets/services/food-for-free.svg" alt="" />
        </div>
      </div>
      <img src="../assets/services/delivery.svg" alt="" />
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
section {
  padding: 50px;
  @include desc();

  .services-container {
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
  }
}
</style>