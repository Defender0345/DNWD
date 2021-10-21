<template>
   <div class="hero" :style="cssProps">
      <div class="content">
         <div class="title">
            <p>&lt;-- Making the internet available for everyone! --&gt;</p>
            <span>POWERFUL &amp; AFFORDABLE</span>
            <span>DIGITAL SOLUTIONS</span>
         </div>
         <div class="icons">
            <div class="card">
               <i class="fas fa-server"></i>
               <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="card">
               <i class="fas fa-network-wired"></i>
               <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="card">
               <i class="fas fa-tachometer-alt"></i>
               <p>Lorem ipsum dolor sit amet.</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Hero',

   data() {
      return {
         cssProps: {
            backgroundImage: `url(${require('@/assets/Images/hero.webp')})`,
         },
      };
   },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.hero {
   height: 800px;
   //  max-height: 100vh;
   position: relative;
   color: white;
   background: no-repeat center center/cover;
   top: 0;

   .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      padding: 0 20px;

      .title {
         display: flex;
         flex-direction: column;

         span {
            font-size: 80px;
            font-weight: bold;
            letter-spacing: 2.5px;
            text-shadow: 2.5px 5px rgba(21, 28, 56, 0.8);
         }

         p {
            font-size: 30px;
            margin: 20px 0 10px;
            text-shadow: 1px 2px rgba(21, 28, 56, 0.8);
         }
      }

      .icons {
         display: flex;
         width: 80vw;
         max-width: 80%;
         justify-content: space-around;

         .card {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            border: darkgray 1px solid;
            // box-shadow: 2.5px 5px lightgray;
            padding: 20px;
            margin: 20px;
            height: 200px;
            width: 150px;

            &:hover {
               transition: all 0.3s linear;
               background-color: $primary-color;

               i {
                  color: white;
               }
            }

            i {
               font-size: 50px;
               color: $secondary-color;
            }

            p {
               font-size: 20px;
               font-weight: bold;
            }
         }
      }
   }

   * {
      z-index: 10;
   }
}

@media (max-width: 768px) {
}
</style>
