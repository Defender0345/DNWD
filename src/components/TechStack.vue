<template>
   <div class="techstack">
      <div v-for="img in imgs" :key="img">
         <img :src="img" alt="logo's of tech stack used" />
      </div>
   </div>
</template>

<script>
export default {
   name: 'TechStack',

   data() {
      return {
         imgs: [
            require('@/assets/Images/techstack/vuejs.webp'),
            require('@/assets/Images/techstack/strapi.webp'),
            require('@/assets/Images/techstack/vuetify.webp'),
            require('@/assets/Images/techstack/cPanel.webp'),
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.techstack {
   display: flex;
   justify-content: space-around;
   margin: 2em 0;
   width: 100%;
   height: 150px;

   div {
      display: flex;
      width: 23%;
      justify-content: center;
      align-items: center;

      img {
         max-height: 100%;
         max-width: 80%;
      }
   }
}
</style>
