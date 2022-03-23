<template>
  <div class="form-container">
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/pages/success"
      class="form"
    >
      <h2>Every inquiry is welcomed</h2>
      <span>
        Your email address will not be published. Required fields are marked *
      </span>
      <p>
        <input
          type="text"
          name="name"
          placeholder="Your name..*"
          v-model="state.name"
        />
        <span class="error" v-if="v$.name.$error">
          {{ v$.name.$errors[0].$message }}
        </span>
      </p>
      <p>
        <input
          type="email"
          name="email"
          placeholder="Your email..*"
          v-model="state.email"
        />
        <span class="error" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </span>
      </p>
      <p>
        <textarea
          name="message"
          id=""
          cols="5"
          rows="10"
          placeholder="Your message.."
          v-model="state.message"
        ></textarea>
      </p>
      <button type="submit" @click="submitForm">SEND MESSAGE</button>
    </form>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import { reactive, computed } from 'vue';

export default {
  name: 'Form',

  setup() {
    const state = reactive({
      name: '',
      email: '',
      message: '',
    });

    const rules = computed(() => {
      return {
        name: { required: helpers.withMessage('Name is required', required) },
        email: {
          required: helpers.withMessage('Email is required', required),
          email: helpers.withMessage('Valid email is required', email),
        },
        message: '',
      };
    });

    const v$ = useValidate(rules, state);

    return {
      state,
      v$,
    };
  },

  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert('Message Successfully Sent!');
      } else {
        alert('Required fields have not been filled.');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_shared.scss';

.form-container {
  background-image: linear-gradient(90deg, #00deff 0%, #7141b1 100%);
  width: 45%;
  padding: 2em;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
      color: white;
      font-size: 2em;
      font-weight: bold;
      letter-spacing: 0.5px;
      margin: 20px auto;
    }

    span {
      text-align: center;
      color: white;
      font-size: 1em;
      font-weight: bold;
      letter-spacing: 0.5px;
      margin: 0 0 20px 0;
    }

    p {
      align-self: left;
      width: 100%;
      margin: 10px 0;

      input,
      textarea {
        padding: 10px 2.5%;
        width: 95%;
      }

      input {
        background: rgba(255, 255, 255, 0.3);
        border: none;

        &::placeholder {
          color: white;
        }
      }

      .error {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px 0;
        color: red;
      }

      textarea {
        background: rgba(255, 255, 255, 0.3);
        border: none;

        &::placeholder {
          color: white;
        }
      }
    }

    button {
      width: 25%;
      color: black;
      background: white;
      padding: 1em 2em;
      border: none;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        transition: all 0.3s linear;
        background: $primary-color;
        color: white;
      }
    }
  }
}

@media (max-width: 1024px) {
  .form-container {
    .form {
      button {
        width: 30%;
      }
    }
  }
}

@media (max-width: 500px) {
  .form-container {
    .form {
      button {
        width: 50%;
      }
    }
  }
}
</style>
