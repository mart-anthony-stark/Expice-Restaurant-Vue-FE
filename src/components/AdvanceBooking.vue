<template>
  <section>
    <img src="../assets/booking/lettuce.png" alt="" class="lettuce" />
    <img src="../assets/booking/cabbage.png" alt="" class="cabbage" />
    <form>
      <h1>advance booking</h1>
      <div class="input-container">
        <input type="text" placeholder="search restaurant" />
        <button>GO</button>
      </div>
      <div class="detail-inputs">
        <div class="detail">
          <span>Date <img src="../assets/booking/dropdown.svg" alt="" /></span>
          <input ref="dateRef" type="date" />
        </div>
        <div class="detail">
          <span>Time <img src="../assets/booking/dropdown.svg" alt="" /></span>
          <input ref="time" type="time" />
        </div>
        <div class="detail">
          <span
            >Guests <img src="../assets/booking/dropdown.svg" alt=""
          /></span>
          <input @keydown="down($event)" ref="guests" type="text" readonly />
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const dateRef = ref();
    const triggerInput = () => {};

    const down = (e) => {
      console.log(e);
    };

    return { dateRef, triggerInput, down };
  },
});
</script>

<style lang="scss" scoped>
section {
  background: $complementary;
  position: relative;
  overflow: hidden;
  @include center();

  .lettuce {
    height: 100%;
    top: -50px;
    position: absolute;
    left: 0;
  }
  .cabbage {
    position: absolute;
    right: 0;
    width: 20%;
  }

  form {
    @include center();
    padding: 3rem;
    flex-direction: column;
    gap: 3rem;
    background: #fff;
    max-width: 90%;
    width: 100%;

    h1 {
      color: $secondary;
      font-size: 2rem;

      &::before {
        content: "";
        background: #35cd8c;
        display: block;
        height: 0.8rem;
        width: 80%;
        margin: auto;
      }
    }

    .input-container {
      box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
      height: 50px;
      max-width: 400px;
      display: flex;
      width: 100%;
      > * {
        border: none;
        height: 100%;
      }
      input {
        flex: 1;
        padding: 10px;

        &:focus {
          outline-color: $primary;
        }
      }
      button {
        padding: 1.2rem 2rem;
        color: #fff;
        background: $primary;
      }
    }

    .detail-inputs {
      @include center();
      gap: 10px;

      .detail {
        @include gapped(1rem);
        flex-direction: column;
        font-size: 1rem;
        color: $secondary;

        select {
          color: $secondary;
          font-size: 1rem;
          -webkit-appearance: none;
          -moz-appearance: none;
          border: none;
          outline: none;
        }

        input {
          /* background: none; */
          max-width: 100px;
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 900px) {
    form {
      z-index: 1;
    }
  }
}
</style>