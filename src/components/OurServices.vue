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
        <div class="service booking">
          <img src="../assets/services/booking.svg" alt="" />
          <img
            class="service-desc"
            src="../assets/services/booking-desc.svg"
            alt=""
          />
        </div>
        <div class="service food">
          <img
            class="service-desc"
            src="../assets/services/food-desc.svg"
            alt=""
          />
          <img src="../assets/services/food-for-free.svg" alt="" />
        </div>
      </div>
      <img class="delivery" src="../assets/services/delivery.svg" alt="" />
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
  overflow: hidden;
  @include desc();

  .services-container {
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;

    .left {
      display: grid;
      grid-template-rows: 1fr 1fr;
      .service {
        img {
          width: 280px;
          height: 100%;
        }

        &.food .service-desc {
          transform: translateX(50px);
        }
        &.booking .service-desc {
          margin-left: -50px;
        }
      }
    }

    .delivery {
      width: 90%;
      height: 90%;
    }
  }
}

@media (max-width: 1255px) {
  .services-container {
    grid-template-columns: 1fr !important;
  }
}
</style>