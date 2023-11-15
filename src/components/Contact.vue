<template>
  <div class="contact">
    <div class="details">
      <div class="header">
        <span>&lt;-- CONTACT DETAILS --&gt;</span>
        <h2>Contact Us</h2>
        <p>
          Send us an email or complete the contact form anytime, we will answer
          all enquiries within 24 hours on business days. We will be happy to
          answer your questions.
        </p>
      </div>
      <div class="cards">
        <div class="card">
          <i class="fas fa-globe-africa"></i>
          <div>
            <p class="heading">Our Address:</p>
            <p class="address">Cape Town, Western Cape</p>
            <p class="address">Johannesburg, Gauteng</p>
          </div>
        </div>
        <div class="card">
          <i class="far fa-envelope"></i>
          <div>
            <p class="heading">Our Mailbox:</p>
            <p class="address">admin@drnsoftware.com</p>
          </div>
        </div>
      </div>
    </div>
    <Form class="form" />
  </div>
</template>

<script>
import Form from '@/components/Form.vue';

export default {
  name: 'Contact',

  components: {
    Form,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.contact {
  display: flex;
  width: 100%;
  margin: 4em 0;
  justify-content: center;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;

    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 75%;

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

      p {
        color: $purple-100-color;
      }
    }

    .cards {
      .card {
        display: flex;
        flex-direction: row;
        margin: 2em 0;

        i {
          font-size: 40px;
          margin-right: 1em;
          color: $secondary-color;
        }

        div {
          .heading {
            font-weight: bold;
            font-size: 20px;
          }

          .address {
            color: $purple-100-color;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .contact {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .details {
      width: 100%;
    }

    .form {
      width: 70%;
    }
  }
}
</style>
