<template>
  <div id="home">
    <Hero />
    <section>
      <div class="aboutUs" :style="cssProps">
        <div class="content">
          <span>&lt;-- THIS IS DND SOFTWARE --&gt;</span>
          <h2>
            PROVIDE WEB SERVICES FOR LARGE AND SMALL COMPANIES AT A FRACTION OF
            THE PRICE
          </h2>
        </div>
      </div>
    </section>
    <Goal id="goal" />
    <TechStack />
    <Services id="services" />
    <Contact id="contact" />
    <!-- <carousel @next="next" @prev="prev" class="carousel">
         <carousel-slide
            v-for="(slide, index) in slides"
            :key="slide"
            :index="index"
            :visibleSlide="visibleSlide"
            :direction="direction"
         >
            <img :src="slide" alt="Images of Previous Hair done" />
         </carousel-slide>
      </carousel> -->
  </div>
</template>

<script>
// import Carousel from '@/components/Carousel.vue';
// import CarouselSlide from '@/components/CarouselSlide.vue';
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
    // Carousel,
    // CarouselSlide,
  },

  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/Images/aboutUs.webp')})`,
      },
      // Carousel Start
      // slides: [
      //    require('@/assets/Images/carousel/carousel1.webp'),
      //    require('@/assets/Images/carousel/carousel2.webp'),
      //    require('@/assets/Images/carousel/carousel3.webp'),
      //    require('@/assets/Images/carousel/carousel4.webp'),
      //    require('@/assets/Images/carousel/carousel5.webp'),
      // ],
      // visibleSlide: 0,
      // direction: 'left',
      // Carousel End
    };
  },

  computed: {
    // Carousel Start
    // slidesLength() {
    //    return this.slides.length;
    // },
    // Carousel End
  },

  methods: {
    // Carousel Start
    // next() {
    //    if (this.visibleSlide >= this.slidesLength - 1) {
    //       this.visibleSlide = 0;
    //    } else {
    //       this.visibleSlide++;
    //    }
    //    this.direction = 'left';
    // },
    // prev() {
    //    if (this.visibleSlide <= 0) {
    //       this.visibleSlide = this.slidesLength - 1;
    //    } else {
    //       this.visibleSlide--;
    //    }
    //    this.direction = 'right';
    // },
    // Carousel End
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
      margin: 20px 0 10px;
    }
  }
}

@media (max-width: 568px) {
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
