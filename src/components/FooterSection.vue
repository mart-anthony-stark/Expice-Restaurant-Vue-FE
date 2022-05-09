<template>
  <footer>
    <img class="bg" src="../assets/footer/plant.svg" alt="" />
    <div class="top-container">
      <div class="container">
        <div class="heading">
          <h1>Get Notified</h1>
          <h1>About New Amazing Products</h1>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
          magnam.
        </p>
        <div class="email-input-container">
          <input type="text" placeholder="E-mail" />
          <img src="../assets/footer/subscribe-btn.svg" alt="" />
        </div>

        <div class="links">
          <router-link to="/">Product</router-link>
          <router-link to="/">Company</router-link>
          <router-link to="/">Learn More</router-link>
          <router-link to="/">Get In Touch</router-link>
        </div>
      </div>
    </div>

    <div class="socials">
      <div class="links">
        <router-link to="/"
          ><img src="../assets/footer/fb.svg" alt=""
        /></router-link>
        <router-link to="/"
          ><img src="../assets/footer/twitter.svg" alt=""
        /></router-link>
        <router-link to="/"
          ><img src="../assets/footer/linkedin.svg" alt=""
        /></router-link>
        <router-link to="/"
          ><img src="../assets/footer/behance.svg" alt=""
        /></router-link>
      </div>

      <span>©2020 Expice Studio</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: #fff5ec;
  min-height: 60vh;
  position: relative;
  .top-container {
    @include center();
  }

  .bg {
    position: absolute;
    left: 0;
    height: 100%;
  }

  .container {
    .heading {
      text-align: center;
      h1 {
        color: $secondary;
        font-weight: 400;
        font-size: 2rem;
      }
    }
    p {
      color: #707070;
    }
    .email-input-container {
      background: #fff;
      border-radius: 35px;
      padding: 10px;
      position: relative;
      height: 60px;
      max-width: 400px;
      width: 100%;
      margin: auto;
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr 30px;
      place-items: center;

      input {
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
        padding-left: 1rem;
      }

      img {
        width: 30px;
        cursor: pointer;
      }
    }

    .links {
      @include center();
      gap: 1rem;
      margin-top: 2rem;

      a {
        color: #707070;
        text-decoration: none;
      }
    }
  }

  .socials {
    @include gapped(4rem);
    position: absolute;
    bottom: 10px;
    right: 4rem;

    .links {
      @include gapped(1rem);
    }
  }
}
</style>