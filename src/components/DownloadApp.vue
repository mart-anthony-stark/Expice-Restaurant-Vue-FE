<template>
  <section>
    <div class="left">
      <div class="heading">
        <h1>Download App For</h1>
        <h1>Exciting Deals</h1>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
        provident.
      </p>
      <div class="buttons">
        <button>
          <img
            src="../assets/download-app/GooglePlayBtn.png"
            alt="Google Play"
          />
        </button>
        <button>
          <img src="../assets/download-app/AppleStore.png" alt="Apple Store" />
        </button>
        <button></button>
      </div>
    </div>
    <div class="right">
      <img src="../assets/download-app/Phone.png" alt="" />
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
  background: $complementary;
  @include center();
  gap: 5rem;

  .left {
    @include gapped(1.5rem);
    flex-direction: column;
    .heading {
      position: relative;

      h1 {
        color: $secondary;
        font-size: 2rem;
        font-weight: 400;
      }

      &::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 1rem;
        background: $primary;
        left: -1.3rem;
      }
    }

    p {
      max-width: 400px;
    }

    .buttons {
      @include gapped(1rem);
      button {
        background: none;
        border: none;
      }
    }
  }

  .right img {
    height: 100vh;
  }
}
</style>