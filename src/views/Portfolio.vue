<template>
  <div class="portfolio">
    <h1>The Portfolio page is under development!</h1>
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

export default {
  name: 'Portfolio',

  components: {
    // Carousel,
    // CarouselSlide,
  },

  data() {
    return {
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

.portfolio {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    text-align: center;
  }
}
</style>
