<template>
   <nav>
      <div>
         <div class="logo">
            <img :src="img" alt="" />
         </div>
         <div class="nav">
            <a href="#">HOME</a>
            <a href="#">SERVICES</a>
            <a href="#">ABOUT US</a>
            <a href="#">CONTACT US</a>
         </div>
      </div>
   </nav>
</template>

<script>
export default {
   name: 'Navbar',

   data() {
      return {
         img: [require('@/assets/Images/logo.webp')],
      };
   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/_shared.scss';

nav {
   width: 100vw;

   div {
      display: flex;
      max-width: 1200px;
      align-items: center;
      justify-content: center;
   }
}
</style>
