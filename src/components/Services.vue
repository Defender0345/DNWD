<template>
  <div class="services">
    <span>&lt;-- OUR SERVICES --&gt;</span>
    <h2>Take a look at our services</h2>
    <div class="cards">
      <div class="card" :style="cssProps">
        <span class="card-text"
          >&lt;-- Don't want to pay a large sum upfront for a website?
          --&gt;</span
        >
        <h3>Alpha Service</h3>
        <div class="desc">
          <p>
            Get your website designed and developed with monthly maintanence.
          </p>
          <br />
          <p>This package includes:</p>
        </div>
        <ul>
          <li>Unique Design</li>
          <li>Development of the website</li>
          <li>Mobile first design</li>
          <li>Website Hosting</li>
          <li>
            Website Domain at extra cost <br />
            (Determined by domain price)
          </li>
          <li>SEO Friendly</li>
          <li>SSL Certificate included</li>
          <li>Includes Charlie Service</li>
        </ul>
        <div class="buttons">
          <a href="#" class="btn-light">R250 p/m</a>
          <a href="#" class="btn-dark">Contact Us</a>
        </div>
        <span class="card-text"
          >&lt;-- This price is for a 1 year duration, down to R100 p/m for
          further hosting &amp; maintanence --&gt;</span
        >
      </div>
      <div class="card" :style="cssProps">
        <span class="card-text"
          >&lt;-- Just looking for a new website? --&gt;</span
        >
        <h3>Bravo Service</h3>
        <div class="desc">
          <p>Get your website designed and developed at no additional cost.</p>
          <br />
          <p>This package includes:</p>
        </div>
        <ul>
          <li>Unique Design</li>
          <li>
            Up to a 3 page website
            <br />
            (Additional Pages cost extra)
          </li>
          <li>Development of the website</li>
          <li>Mobile first design</li>
          <li>
            Website Domain at extra cost <br />
            (Determined by domain price)
          </li>
          <li>Ensuring SEO Friendly</li>
        </ul>
        <div class="buttons">
          <a href="#" class="btn-light">R2000</a>
          <a href="#" class="btn-dark">Contact Us</a>
        </div>
        <span class="card-text"
          >&lt;-- This is a flat price, if you would like us to host your new
          website take a look at Charlie Service --&gt;</span
        >
      </div>
      <div class="card" :style="cssProps">
        <span class="card-text"
          >&lt;-- Need hosting or someone to oversee your website? --&gt;</span
        >
        <h3>Charlie Service</h3>
        <div class="desc">
          <p>Monthly maintanence and updates for your website.</p>
          <br />
          <p>This package includes:</p>
        </div>
        <ul>
          <li>3 Changes to your website monhtly</li>
          <li>Ensuring SEO Friendly</li>
          <li>SSL Certificate if your website needs one</li>
          <li>Website Hosting</li>
          <li>Mobile first design</li>
        </ul>
        <div class="buttons">
          <a href="#" class="btn-light">R100 p/m</a>
          <a href="#" class="btn-dark">Contact Us</a>
        </div>
        <span class="card-text"
          >&lt;-- Flat R100 per month, no extra or hidden costs --&gt;</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',

  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/Images/services.webp')})`,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: $purple-translucent;
  padding: 2em 0;

  span {
    color: $purple-400-color;
    font-size: 0.8em;
    font-weight: bold;
    letter-spacing: 0.5px;
    //  padding-top: 2em;
  }

  h2 {
    color: black;
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin: 0 0 2em 0;
  }

  .cards {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    .card {
      width: 400px;
      max-width: 25%;
      height: 700px;
      box-shadow: 5px 5px 10px rgb(70, 70, 70);
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      // justify-content: space-around;
      background: no-repeat center center/cover;

      &:hover {
        box-shadow: 10px 10px 20px rgb(43, 42, 42);
      }

      .card-text {
        width: 90%;
        color: $secondary-color;
        font-size: 0.8em;
        letter-spacing: 3px;
        padding: 1em 0;
        height: 50px;
      }

      h3 {
        font-size: 30px;
        padding: 0 0 0.5em 0;
      }

      .desc {
        display: flex;
        flex-direction: column;
        font-size: 1em;
        line-height: 1.3em;
        letter-spacing: 3px;
        width: 80%;
        padding: 0 0 1em 0;
        height: 100px;
      }

      ul {
        list-style-type: none;
        line-height: 2em;
        height: 300px;

        li {
          &::before {
            content: '//';
            margin-right: 20px;
            color: $secondary-color;
          }
        }
      }

      .buttons {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 1em 0 1em 0;

        a {
          text-decoration: none;
          padding: 0.7em 1em;
          font-size: 25px;

          &:hover {
            color: white;
            background-color: $secondary-color;
          }
        }

        .btn-light {
          color: white;
          background-color: $primary-color;
        }

        .btn-dark {
          color: black;
          background-color: $purple-400-color;
        }
      }
    }
  }
}
</style>
