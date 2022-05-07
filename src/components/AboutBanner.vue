<template>
  <section class="about-banner">
    <div class="desc" data-aos="fade-left">
      <h1>
        <span>Some Top Restaurant For</span
        ><span> Dining In Or Take Away!</span>
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

    <div class="products">
      <div class="product" data-aos="fade-up" data-aos-duration="1500">
        <img class="meal" src="../assets/hero/pizza.svg" alt="Pizza" />
        <div class="details">
          <h1>Fire Water</h1>
          <p>
            We are all about we are all about to the fullest and all content
            dining out or in!dining out or in!
          </p>
          <div class="location">
            <img src="../assets/hero/location-icon.svg" alt="New Market" />
            New Market
          </div>
          <button>Book Now</button>
        </div>
      </div>
      <div
        class="product"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-delay="1500"
      >
        <img class="meal" src="../assets/hero/burger.svg" alt="Burger" />
        <div class="details">
          <h1>The Wonton</h1>
          <p>
            We are all about we are all about to the fullest and all content
            dining out or in!dining out or in!
          </p>
          <div class="location">
            <img src="../assets/hero/location-icon.svg" alt="Saheb Bazar" />
            Saheb Bazar
          </div>
          <button>Book Now</button>
        </div>
      </div>
      <div class="see-more">
        <img src="../assets/hero/arrow.svg" alt="See more" />
        See more
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.about-banner {
  margin-top: 6rem;
  padding-bottom: 50px;
  overflow: hidden;

  @include desc();

  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 10rem;

    .product {
      height: 450px;
      width: 450px;
      position: relative;

      img.meal {
        height: 450px;
        width: 450px;
      }

      .details {
        color: #fff;
        position: absolute;
        bottom: 0;
        height: 200px;
        width: 100%;
        padding: 20px;
        background: rgba(53, 205, 140, 0.6);
        border-radius: 0 0 10px 10px;

        .location {
          margin-top: 10px;
          @include gapped(10px);
        }

        button {
          position: absolute;
          right: 0;
          bottom: 1rem;
          background: #fff;
          border: none;
          border-radius: 25px 0 0 25px;
          width: 150px;
          height: 50px;
          color: $primary;
        }
      }
    }

    .see-more {
      @include gapped(1rem);
      color: $primary;
      flex-direction: column;
      justify-content: center;
      margin-left: 3rem;
      cursor: pointer;

      img {
        margin-left: -1.5rem;
      }
    }
  }
}
</style>