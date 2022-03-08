<template>
  <div class="goal" :style="cssProps">
    <div class="content">
      <div class="left">
        <span>&lt;-- OUR GOAL --&gt;</span>
        <h2>Providing websites to any and all.</h2>
        <p>
          Our goal is to provide fast and effective websites at an affordable
          price. Many small and medium businesses believe that professional
          websites are out of their reach and we here at DRN Software aim to
          change that. You can choose between a small monthly payment or an
          upfront payment, it's up to you. We also provide fast hosting
          services, with Netlify accelerating loading speeds and waiting times
          keeping Google and your Clients happy.
        </p>
      </div>
      <div class="right">
        <img :src="img" alt="business innovation illustration" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Goal',

  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/Images/goal.webp')})`,
      },

      img: [require('@/assets/Images/goal2.webp')],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.goal {
  height: 800px;
  position: relative;
  color: white;
  background: no-repeat center center/cover;
  top: 0;
  margin-top: 2em;

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    height: 100%;
  }
  .left {
    width: 45%;
    span {
      color: $purple-400-color;
      font-size: 0.8em;
      font-weight: bold;
      letter-spacing: 0.5px;
    }
    h2 {
      color: white;
      font-size: 2em;
      font-weight: bold;
      letter-spacing: 0.5px;
      margin: 20px 0 10px;
    }
    p {
      line-height: 2em;
      letter-spacing: 3px;
      font-size: 1.2em;
    }
  }

  .right {
    width: 45%;
    img {
      width: 80%;
    }
  }
}

@media (max-width: 768px) {
  .goal {
    margin-top: 0;

    .right {
      display: none;
    }

    .left {
      width: 80%;

      span {
        display: none;
      }

      p {
        line-height: 1.6em;
        letter-spacing: 2px;
        font-size: 1.2em;
      }
    }
  }
}

@media (max-width: 568px) {
  .goal {
    .content {
      .left {
        width: 90%;
      }

      .right {
        display: none;
      }
    }
  }
}
</style>
