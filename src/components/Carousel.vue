<template>
   <div class="carousel">
      <slot></slot>

      <button @click="next" class="next" aria-label="next on carousel">
         <i class="fas fa-chevron-right"></i>
      </button>
      <button @click="prev" class="prev" aria-label="previous on carousel">
         <i class="fas fa-chevron-left"></i>
      </button>
   </div>
</template>

<script>
export default {
   name: 'Carousel',

   methods: {
      next() {
         this.$emit('next');
      },
      prev() {
         this.$emit('prev');
      },
   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/_shared.scss';

.carousel {
   position: relative;
   width: 50vw;
   height: 400px;
   overflow: hidden;

   button {
      position: absolute;
      height: 40px;
      width: 50px;
      top: calc(50% - 20px);
      background-color: rgba(0, 0, 0, 0);
      border: none;
      color: $accent-color;

      .fas {
         font-size: 40px;
      }

      &:hover,
      &:focus {
         cursor: pointer;
         color: black;
         outline: none;
      }
   }

   .next {
      right: 0;
   }

   .prev {
      left: 0;
   }
}

@media (max-width: 768px) {
   .carousel {
      width: 100%;
      height: 100%;
   }
}
</style>
