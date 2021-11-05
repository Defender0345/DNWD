<template>
  <div class="portfolio">
    <div class="devider"></div>
    <div class="flex">
      <div class="img">
        <a href="#">
          <img :src="img[0]" alt="" />
        </a>
      </div>
      <div class="test">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum
          laboriosam facere debitis tenetur iure facilis velit in? Eaque earum
          officiis necessitatibus adipisci ab, nobis ullam voluptatem nemo
          distinctio aut magnam, ad provident reiciendis delectus similique
          voluptatibus esse ipsum tempora placeat suscipit? Ea minima similique,
          cum nam accusantium architecto eius?
        </p>
      </div>
    </div>
    <div class="flex">
      <div class="test">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum
          laboriosam facere debitis tenetur iure facilis velit in? Eaque earum
          officiis necessitatibus adipisci ab, nobis ullam voluptatem nemo
          distinctio aut magnam, ad provident reiciendis delectus similique
          voluptatibus esse ipsum tempora placeat suscipit? Ea minima similique,
          cum nam accusantium architecto eius?
        </p>
      </div>
      <div class="img">
        <a href="#">
          <img :src="img[1]" alt="" />
        </a>
      </div>
    </div>
    <div class="flex">
      <div class="img">
        <a href="#">
          <img :src="img[2]" alt="" />
        </a>
      </div>
      <div class="test">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum
          laboriosam facere debitis tenetur iure facilis velit in? Eaque earum
          officiis necessitatibus adipisci ab, nobis ullam voluptatem nemo
          distinctio aut magnam, ad provident reiciendis delectus similique
          voluptatibus esse ipsum tempora placeat suscipit? Ea minima similique,
          cum nam accusantium architecto eius?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',

  components: {},

  data() {
    return {
      img: [
        require('@/assets/Images/portfolio/leposh-port.webp'),
        require('@/assets/Images/portfolio/vphev-port.webp'),
        require('@/assets/Images/portfolio/wolfie-port.webp'),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.portfolio {
  background: #d8d5e6;
  width: 100%;
  .devider {
    height: 150px;
    width: 100%;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    padding: 2em;

    .img {
      width: 50%;
      margin: 1em;

      a {
        img {
          width: 100%;
          height: 100%;
          &:hover {
            transform: scale(1.01);
          }
        }
      }
    }

    .test {
      display: flex;
      flex-direction: column;
      width: 50%;
      // background: #8982b21e;
      padding: 0.5em;
      border-radius: 2em;

      h2 {
        font-size: 2em;
        letter-spacing: 3px;
        border-bottom: 1px solid $primary-color;
        padding: 1em;
      }

      p {
        font-size: 1.2em;
        letter-spacing: 1.2px;
        padding: 1em;
      }
    }
  }
}

@media (max-width: 1024px) {
  .portfolio {
    .flex {
      .test {
        h2 {
          font-size: 1.5em;
        }

        p {
          font-size: 00.8em;
        }
      }
    }
  }
}
</style>
