<template>
   <div class="services">
      <span>&lt;-- OUR SERVICES --&gt;</span>
      <h2>Take a look at our services</h2>
      <div class="cards">
         <div class="card" :style="cssProps">
            <h3>Service 1</h3>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
               corrupti eveniet, dolore accusamus eum sed aspernatur, ducimus
               hic non doloremque possimus placeat, nulla ad in neque beatae
               debitis tempore sit.
            </p>
            <div>
               <a href="#" class="btn-light">FAQ</a>
               <a href="#" class="btn-dark">Contact Us</a>
            </div>
         </div>
         <div class="card" :style="cssProps">
            <h3>Service 2</h3>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
               corrupti eveniet, dolore accusamus eum sed aspernatur, ducimus
               hic non doloremque possimus placeat, nulla ad in neque beatae
               debitis tempore sit.
            </p>
            <div>
               <a href="#" class="btn-light">FAQ</a>
               <a href="#" class="btn-dark">Contact Us</a>
            </div>
         </div>
         <div class="card" :style="cssProps">
            <h3>Service 3</h3>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
               corrupti eveniet, dolore accusamus eum sed aspernatur, ducimus
               hic non doloremque possimus placeat, nulla ad in neque beatae
               debitis tempore sit.
            </p>
            <div>
               <a href="#" class="btn-light">FAQ</a>
               <a href="#" class="btn-dark">Contact Us</a>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Services',

   data() {
      return {
         cssProps: {
            backgroundImage: `url(${require('@/assets/Images/services.webp')})`,
         },
      };
   },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.services {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   background-color: $purple-translucent;
   padding: 2em 0;

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

   .cards {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;

      .card {
         width: 400px;
         max-width: 25%;
         height: 500px;
         box-shadow: 5px 5px 10px rgb(70, 70, 70);
         color: white;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-around;
         background: no-repeat center center/cover;

         &:hover {
            box-shadow: 10px 10px 20px rgb(43, 42, 42);
         }

         h3 {
            font-size: 30px;
         }

         p {
            font-size: 1em;
            line-height: 1.3em;
            letter-spacing: 3px;
            width: 80%;
         }

         div {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;

            a {
               text-decoration: none;
               padding: 0.7em 1em;
               font-size: 25px;

               &:hover {
                  color: white;
                  background-color: $secondary-color;
               }
            }

            .btn-light {
               color: white;
               background-color: $primary-color;
            }

            .btn-dark {
               color: black;
               background-color: $purple-400-color;
            }
         }
      }
   }
}
</style>
