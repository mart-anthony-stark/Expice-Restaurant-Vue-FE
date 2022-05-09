<template>
  <section class="menu">
    <div class="heading">
      <h1>Explore Our Foods</h1>
      <span
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi magni
        blanditiis repellat, ad eligendi expedita incidunt tempora.</span
      >
    </div>
    <div class="foods-container">
      <div v-for="food in foods" :key="food.id" class="card">
        <div class="preview">
          <img :src="food.img" :alt="food.img" />
        </div>
        <div class="pricing">
          <h2>{{ food.name }}</h2>
          <span>${{ food.price }}</span>
        </div>
        <p>
          {{ food.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import food1 from "../assets/menu/foods/1.png";
import food2 from "../assets/menu/foods/2.png";
import food3 from "../assets/menu/foods/3.png";
import food4 from "../assets/menu/foods/4.png";
import food5 from "../assets/menu/foods/5.png";
import food6 from "../assets/menu/foods/6.png";
export default {
  setup() {
    const foods = [
      {
        id: 1,
        name: "Hand Sandwich",
        img: food1,
        price: 10.25,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, in.",
      },
      {
        id: 2,
        name: "Hand Sandwich",
        img: food2,
        price: 10.25,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, in.",
      },
      {
        id: 3,
        name: "Hand Sandwich",
        img: food3,
        price: 10.25,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, in.",
      },
      {
        id: 3,
        name: "Hand Sandwich",
        img: food4,
        price: 10.25,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, in.",
      },
      {
        id: 3,
        name: "Hand Sandwich",
        img: food5,
        price: 10.25,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, in.",
      },
      {
        id: 3,
        name: "Hand Sandwich",
        img: food6,
        price: 10.25,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, in.",
      },
    ];

    return { foods };
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 2rem;

  .heading {
    @include center();
    text-align: center;
    flex-direction: column;
    h1 {
      color: $secondary;
      font-weight: 500;
      font-size: 2rem;
    }
    span {
      display: block;
      max-width: 600px;
    }
  }
  .foods-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1.5rem;
    margin-top: 2rem;
    place-items: center;
    gap: 10px;

    .card {
      height: 430px;
      max-width: 400px;
      background: #fff;
      border-radius: 15px;

      .preview {
        height: 300px;
        width: 100%;
        overflow: hidden;
        border-radius: 15px;

        img {
          height: 100%;
          width: 100%;
          transition: 1s ease-in-out;
        }

        &:hover img {
          transform: scale(1.2);
        }
      }

      .pricing {
        @include center();
        padding: 1rem;
        justify-content: space-between;
        h2 {
          color: $secondary;
          font-weight: 500;
        }
        span {
          color: $primary;
          font-weight: 600;
        }
      }
      p {
        color: #707070;
        padding: 0 1rem 0 1rem;
      }
    }
  }
}
</style>