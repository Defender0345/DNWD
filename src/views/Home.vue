<template>
   <div>
      <Hero />
      <section>
         <div class="aboutUs" :style="cssProps">
            <div class="content">
               <span>&lt;-- THIS IS DND SOFTWARE --&gt;</span>
               <h2>
                  PROVIDE WEB SERVICES FOR LARGE AND SMALL COMPANIES AT A
                  FRACTION OF THE PRICE
               </h2>
            </div>
         </div>
         <div class="a_cards">
            <div class="card">
               <i class="fas fa-check-circle" style="color: #7040b1"></i>
               <div>
                  <p class="header">Heading</p>
                  <p class="content">Lorem, ipsum dolor.</p>
               </div>
            </div>
            <div class="card">
               <i class="fas fa-check-circle" style="color: #43bbfe"></i>
               <div>
                  <p class="header">Heading</p>
                  <p class="content">Lorem, ipsum dolor.</p>
               </div>
            </div>
            <div class="card">
               <i class="fas fa-check-circle" style="color: #201f3b"></i>
               <div>
                  <p class="header">Heading</p>
                  <p class="content">Lorem, ipsum dolor.</p>
               </div>
            </div>
         </div>
      </section>
      <Goal />
      <TechStack />
      <Services />
      <Contact />
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
   width: 1000px;
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

.a_cards {
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 2em 0;

   .card {
      display: flex;
      align-items: center;
      justify-content: space-around;
      border: $translucent-background 1px solid;
      padding: 1em;
      width: 250px;

      i {
         font-size: 40px;
      }

      div {
         .header {
            font-size: 1.5em;
            font-weight: bold;
         }

         .content {
            font-size: 1.2em;
         }
      }
   }
}
</style>
