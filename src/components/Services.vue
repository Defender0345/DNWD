<template>
  <div class="services">
    <span>&lt;-- OUR SERVICES --&gt;</span>
    <h2>Take a look at our services</h2>
    <div class="cards">
      <div class="card" :style="cssProps">
        <span class="card-text"
          >Enjoy the flexibility of paying just 50% upfront, followed by
          convenient monthly payments over a 1-year duration</span
        >
        <h3>Alpha Service</h3>
        <div class="desc">
          <p>
            Get your website designed and developed with monthly maintenance and
            hosting.
          </p>
          <br />
          <p>This package includes:</p>
        </div>
        <ul>
          <li>Custom Designed Website</li>
          <li>Mobile first</li>
          <li>Website Hosting</li>
          <li>
            Website Domain at extra cost <br />
            (Determined by domain price per annum)
          </li>
          <li>SEO Friendly</li>
          <li>SSL Certificate included</li>
          <li>Monthly Google Analytics Report</li>
        </ul>
        <div class="buttons">
          <a href="/#contact" class="btn-light"
            >Remaining balance <br />
            over 12 months</a
          >
          <a href="/#contact" class="btn-dark">Contact Us</a>
        </div>
        <span class="card-text"
          >&lt;-- This price is for a 1 year duration then down to R200 p/m for
          further hosting &amp; maintenance --&gt;</span
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
          <li>Custom Designed Website</li>
          <li>Mobile first</li>
          <li>
            Up to a 2 page website
            <br />
            (Additional Pages cost extra)
          </li>
          <li>
            Website Domain at extra cost <br />
            (Determined by domain price per annum)
          </li>
          <li>SEO Friendly</li>
        </ul>
        <div class="buttons">
          <a href="/#contact" class="btn-light">FROM R1500</a>
          <a href="/#contact" class="btn-dark">Contact Us</a>
        </div>
        <span class="card-text"
          >&lt;-- If you would like us to host your new website take a look at
          Charlie Service --&gt;</span
        >
      </div>
      <div class="card" :style="cssProps">
        <span class="card-text"
          >&lt;-- Need hosting or someone to oversee and maintain your website?
          --&gt;</span
        >
        <h3>Charlie Service</h3>
        <div class="desc">
          <p>Monthly maintenance and updates for your website.</p>
          <br />
          <br />
          <p>This package includes:</p>
        </div>
        <ul>
          <li>3 Minor Changes to your website monthly</li>
          <li>
            SEO Friendly<br />
            (At an additional charge)
          </li>
          <li>SSL Certificate</li>
          <li>Website Hosting</li>
          <li>
            Monthly Google Analytics Report<br />
            (At an additional charge)
          </li>
        </ul>
        <div class="buttons">
          <a href="/#contact" class="btn-light">R200 p/m</a>
          <a href="/#contact" class="btn-dark">Contact Us</a>
        </div>
        <span class="card-text"
          >&lt;-- R200 per month, no extra or hidden costs. Major changes are
          subject to quotation --&gt;</span
        >
      </div>
    </div>
    <a class="link" href="/glossary"> Glossary of Terms </a>
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
  }

  h2 {
    color: black;
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin: 1.5em 0;
  }

  .link {
    cursor: pointer;
    text-decoration: none;
    margin-top: 1em;
    background: white;
    padding: 0.5em 1em;
    font-weight: bold;
    font-size: 1.2em;
    color: black;
    box-shadow: 5px 5px 10px rgb(70, 70, 70);

    &:hover {
      transition: all 0.3s linear;
      background: $primary-color;
      color: white;
      box-shadow: 8px 8px 15px rgb(70, 70, 70);
    }
  }

  .cards {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;

    .card {
      width: 400px;
      height: 750px;
      box-shadow: 5px 5px 10px rgb(70, 70, 70);
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: no-repeat center center/cover;

      &:hover {
        transform: scale(1.02);
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
          font-size: 20px;

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

@media (max-width: 1300px) {
  .services {
    .cards {
      .card {
        height: 750px;
        margin: 1em;

        .buttons {
          a {
            padding: 0.7em 1em;
          }
        }
      }
    }
  }
}
</style>
