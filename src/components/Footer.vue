<template>
  <footer>
    <div class="logo">
      <img :src="img" alt="DNR Logo" />
    </div>
    <div class="socials">
      <a href="#"><i class="fab fa-linkedin"></i></a>
      <a href="#"><i class="fab fa-facebook-square"></i></a>
      <a href="#"><i class="fab fa-twitter-square"></i></a>
    </div>
    <p>Copyright © 2021 DNR Software. All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

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

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $accent-color;
  height: 30vh;
  padding: 2em 0 0 0;

  .socials {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    padding: 1em;

    i {
      font-size: 40px;
      color: $purple-100-color;

      &:hover {
        font-size: 50px;
        color: $secondary-color;
      }
    }
  }

  p {
    color: white;
    padding: 1em;
  }
}
</style>
