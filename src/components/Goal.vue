<template>
  <div class="goal" :style="cssProps">
    <div class="content">
      <div class="left">
        <span>&lt;-- OUR GOAL --&gt;</span>
        <h2>Providing web services to any and all.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ducimus
          voluptatum accusantium corporis. Sed delectus tenetur et labore
          possimus doloremque culpa earum animi voluptatibus? Corrupti iste quam
          itaque veritatis explicabo ipsam modi corporis dolore, obcaecati
          tenetur voluptatum delectus! Ratione explicabo laudantium iste nulla,
          minus unde ad laboriosam deserunt nesciunt enim.
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
    }
  }

  .right {
    width: 45%;
    img {
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .goal {
    margin-top: 0;
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
