<template>
  <div class="form-container">
    <div class="header">
      <h2>Ready to Get Started?</h2>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.form-container {
  background-image: linear-gradient(90deg, #00deff 0%, #7141b1 100%);
}
</style>
