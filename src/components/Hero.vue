<template>
  <div class="hero" :style="cssProps">
    <div class="content">
      <div class="title">
        <p>&lt;-- Making websites available for everyone! --&gt;</p>
        <span>PROFESSIONAL &amp; AFFORDABLE</span>
        <span>WEBSITES</span>
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

// .hero {
//   height: 900px;
//   //  max-height: 100vh;
//   position: relative;
//   color: white;
//   background: no-repeat center center/cover;
//   top: 0;

//   .content {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     height: 100%;
//     padding: 0 20px;

//     .title {
//       display: flex;
//       flex-direction: column;

//       span {
//         font-size: 80px;
//         font-weight: bold;
//         letter-spacing: 2.5px;
//         text-shadow: 2.5px 5px rgba(21, 28, 56, 0.8);
//       }

//       p {
//         font-size: 30px;
//         margin: 20px 0 10px;
//         text-shadow: 1px 2px rgba(21, 28, 56, 0.8);
//       }
//     }
//   }

//   * {
//     z-index: 10;
//   }
// }

// @media (max-width: 1024px) {
//   .hero {
//     .content {
//       .title {
//         span {
//           font-size: 65px;
//         }
//         p {
//           font-size: 25px;
//         }
//       }
//     }
//   }
// }

// @media (max-width: 768px) {
//   .hero {
//     .content {
//       .title {
//         span {
//           font-size: 50px;
//         }
//         p {
//           font-size: 20px;
//         }
//       }
//     }
//   }
// }

// @media (max-width: 568px) {
//   .hero {
//     .content {
//       .icons {
//         .card {
//           height: 150px;
//           width: 100px;

//           i {
//             font-size: 30px;
//           }

//           p {
//             font-size: 15px;
//           }
//         }
//       }
//     }
//   }
// }

// @media (max-width: 500px) {
//   .hero {
//     .content {
//       .icons {
//         display: none;
//       }
//     }
//   }
// }

.hero {
  height: 100vh;
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
        font-size: 4vw; // Adjust based on your design
        font-weight: bold;
        letter-spacing: 0.5vw;
        text-shadow: 0.15vw 0.25vw rgba(21, 28, 56, 0.8);
      }

      p {
        font-size: 2vw; // Adjust based on your design
        margin: 1vw 0 0.5vw;
        text-shadow: 0.15vw 0.25vw rgba(21, 28, 56, 0.8);
      }
    }
  }

  * {
    z-index: 10;
  }
}

@media (max-width: 1024px) {
  .hero {
    .content {
      .title {
        span {
          font-size: 5vw;
        }
        p {
          font-size: 2.5vw;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .hero {
    .content {
      .title {
        span {
          font-size: 6vw;
        }
        p {
          font-size: 3vw;
        }
      }
    }
  }
}

@media (max-width: 568px) {
  .hero {
    .content {
      .title {
        span {
          font-size: 8vw;
        }
        p {
          display: none;
        }
      }
    }
  }
}
</style>
