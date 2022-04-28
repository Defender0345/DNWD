<template>
  <section class="glossary">
    <div class="devider"></div>
    <div class="header">
      <h2>Glossary of Terms</h2>
    </div>
    <div class="wrapper">
      <div class="term">
        <h3>SEO</h3>
        <p>
          SEO stands for search engine optimization, which is a set of practices
          designed to improve the appearance and positioning of web pages in
          organic search results.
        </p>
      </div>
      <div class="term">
        <h3>SSL Certificate</h3>
        <p>
          An SSL certificate is a digital certificate that authenticates a
          website's identity and enables an encrypted connection. SSL stands for
          Secure Sockets Layer, a security protocol that creates an encrypted
          link between a web server and a web browser.
        </p>
      </div>
      <div class="term">
        <h3>Google Analytics</h3>
        <p>
          Google Analytics is a web analytics service that provides statistics
          and basic analytical tools for search engine optimization (SEO) and
          marketing purposes. The service is part of the Google Marketing
          Platform and is available for free to anyone with a Google account.
        </p>
      </div>
      <div class="term">
        <h3>Hosting</h3>
        <p>
          Web hosting is a service that allows organizations and individuals to
          post a website or web page onto the Internet. A web host, or web
          hosting service provider, is a business that provides the technologies
          and services needed for the website or webpage to be viewed in the
          Internet.
        </p>
      </div>
      <div class="term">
        <h3>Mobile First</h3>
        <p>
          A “mobile-first” approach involves designing a desktop site starting
          with the mobile version, which is then adapted to larger screens
          (contrary to the traditional approach of starting with a desktop site
          and then adapting it to smaller screens).
        </p>
      </div>
      <div class="devider"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Glossary',
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  .devider {
    height: 150px;
    width: 100%;
  }
  .header {
    text-align: center;
    h2 {
      font-size: 3em;
    }
  }
  .wrapper {
    text-align: center;
    width: 65%;
    .term {
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 1.5em;
        margin: 10px;
        color: $primary-color;

        &:after {
          content: '';
          display: block;
          margin: auto;
          height: 3px;
          width: 25%;
          background: $primary-color;
          transition: width 1s ease, background-color 1s ease;
        }
      }
      p {
        font-size: 1em;
        font-weight: bold;
        letter-spacing: 1px;
        padding-bottom: 1em;
      }
    }
    .devider {
      height: 100px;
      width: 100%;
    }
  }
}
</style>
