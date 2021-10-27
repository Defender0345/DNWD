<template>
  <nav>
    <div class="navbar">
      <div class="logo">
        <img :src="img" alt="DNR Logo" />
      </div>
      <div class="nav">
        <a href="#">HOME</a>
        <a href="#">SERVICES</a>
        <a href="#">OUR GOAL</a>
        <a href="#">CONTACT US</a>
      </div>
      <div class="quickcontact">
        <i class="far fa-envelope"></i>
        <div>
          <p class="sec-text">Have a question?</p>
          <p>dylannel02@gmail.com</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {
      img: [require('@/assets/Images/logo-white.webp')],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/_shared.scss';

nav {
  position: fixed;
  z-index: 999;
  width: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
  background-color: $primary-color;
  color: $light-100-color;

  .navbar {
    display: flex;
    width: 80%;
    max-width: 1200px;
    align-items: center;
    justify-content: space-between;
    margin: auto;

    .logo {
      padding: 10px;
    }

    .nav {
      display: flex;
      width: 50%;
      max-width: 800px;
      justify-content: space-between;
      font-size: 0.8em;
      font-weight: bold;

      a {
        text-decoration: none;
        color: $light-100-color;

        &:after {
          content: '';
          display: block;
          margin: auto;
          height: 3px;
          width: 0px;
          background: transparent;
          transition: width 1s ease, background-color 1s ease;
        }

        &:hover:after {
          width: 100%;
          background: $secondary-color;
        }

        &:hover {
          color: $secondary-color;
        }
      }
    }

    .quickcontact {
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: $secondary-color 2px solid;

      i {
        font-size: 1.5em;
        margin: 0 0.5em;
        color: $secondary-color;
      }

      div {
        .sec-text {
          color: $secondary-color;
          font-size: 0.7em;
        }
      }
    }
  }
}
</style>
