<template>
  <div class="portfolio">
    <div class="devider"></div>
    <div class="flex">
      <div class="img">
        <a
          href="https://jolly-kowalevski-ffc3de.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img :src="img[0]" alt="" />
        </a>
      </div>
      <div class="content">
        <h2>LePosh Hair Design</h2>
        <p>
          Designed and developed by DRN Software with client feedback. DRN
          Software is also hosting and maintaining this website with price
          updates and aesthetic updates to keep the website current. SSL
          Certificate has also been added to the website.
        </p>
      </div>
    </div>
    <div class="flex flex-right">
      <div class="content">
        <h2>Voortrekker Park Homeowners Association</h2>
        <p>
          Designed and developed by DRN Software with client feedback. DRN
          Software is also hosting and maintaining this website. This website is
          a functional website that shows the documentation for Voortrekker Park
          including the rules, policies and quarterly news updates in pdf format
          as requested by the clients. SSL Certificate has also been added to
          the website.
        </p>
      </div>
      <div class="img">
        <a
          href="https://vphomeowners.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img :src="img[1]" alt="" />
        </a>
      </div>
    </div>
    <div class="flex">
      <div class="img">
        <a
          href="https://pedantic-goldstine-ec07df.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img :src="img[2]" alt="" />
        </a>
      </div>
      <div class="content">
        <h2>Wolfie Art Studios</h2>
        <p>
          Working in close collaboration with the artist with a design they
          provided. DRN Software is also hosting and maintaining this website.
          This website is designed to be a portfolio website showcasing Wolfie
          Art Studios arts and works. SSL Certificate has also been added to the
          website.
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
  background: #8982b21e;
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

    .content {
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
      .content {
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

@media (max-width: 768px) {
  .portfolio {
    .flex {
      flex-direction: column;
      padding: 0;
      .img {
        width: 100%;
      }

      .content {
        width: 100%;
      }
    }

    .flex-right {
      flex-direction: column-reverse;
    }
  }
}
</style>
