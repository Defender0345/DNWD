<template>
  <section id="terms">
    <div class="devider"></div>
    <div class="header">
      <h1>Terms &amp; Conditions</h1>
    </div>
    <div class="center">
      <h2>Under Development</h2>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

section {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .devider {
    height: 150px;
    width: 100%;
  }

  .header {
    position: absolute;
    top: 100px;
    padding: 35px 0;
    width: 100vw;
    display: flex;
    background: $purple-100-color;
    text-align: center;
    justify-content: center;
    h1 {
      font-size: 2em;
      font-family: $font;
    }
  }

  .center {
    display: flex;
    height: 80vw;
    justify-content: center;
    align-items: center;
  }
}
</style>
