<template>
  <div>
    <Navbar class="nav" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import '@/assets/_shared.scss';

* {
  margin: 0;
  padding: 0;
  font-family: 'Nunito Sans', sans-serif;
}

html {
  scroll-behavior: smooth;
}
</style>
