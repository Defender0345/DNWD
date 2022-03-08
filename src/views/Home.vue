<template>
  <div id="home">
    <Hero id="hero" />
    <section>
      <div class="aboutUs" :style="cssProps">
        <div class="content">
          <!-- <span>&lt;-- THIS IS DRN SOFTWARE --&gt;</span> -->
          <h2>PROVIDING WEBSITES AT A FRACTION OF THE PRICE!</h2>
        </div>
      </div>
    </section>
    <Goal id="goal" />
    <TechStack />
    <Services id="services" />
    <Contact id="contact" />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Goal from '@/components/Goal.vue';
import TechStack from '@/components/TechStack.vue';
import Services from '@/components/Services.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'Home',

  components: {
    Hero,
    Goal,
    TechStack,
    Services,
    Contact,
  },

  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/Images/aboutUs.webp')})`,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.aboutUs {
  margin: 5em auto;
  height: 750px;
  width: 100%;
  max-width: 1000px;
  position: relative;
  color: $light-100-color;
  background: no-repeat center center/cover;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 20%;
    padding: 0 20px;

    // span {
    //   color: $purple-400-color;
    //   font-size: 0.8em;
    //   font-weight: bold;
    //   letter-spacing: 0.5px;
    // }

    h2 {
      color: black;
      font-size: 2em;
      font-weight: bold;
      letter-spacing: 0.5px;
      margin: 20px 0 10px;
    }
  }
}

@media (max-width: 1024px) {
  .aboutUs {
    display: none;
  }
}

// @media (max-width: 768px) {
//   .aboutUs {
//     display: none;
//   }
// }
</style>
