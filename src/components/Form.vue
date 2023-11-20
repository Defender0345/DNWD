<template>
  <div class="form-container">
    <!-- <form
      name="ask-question"
      netlify
      method="post"
      data-netlify-honeypot="bot-field"
      class="form"
    >
      <input type="hidden" name="form-name" value="ask-question" />
      <h2>Every inquiry is welcomed</h2>
      <span>
        Your email address will not be published. Required fields are marked *
      </span>
      <label>
        <input
          type="text"
          name="name"
          placeholder="Your name..*"
          v-model="state.name"
        />
        <span class="error" v-if="v$.name.$error">
          {{ v$.name.$errors[0].$message }}
        </span>
      </label>
      <label>
        <input
          type="email"
          name="email"
          placeholder="Your email..*"
          v-model="state.email"
        />
        <span class="error" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </span>
      </label>
      <label>
        <textarea
          name="message"
          id=""
          cols="5"
          rows="10"
          placeholder="Your message.."
          v-model="state.message"
        ></textarea>
      </label>
      <button type="submit" @click="submitForm">SEND MESSAGE</button>
    </form> -->
    <form name="ask-question" method="POST" data-netlify="true" class="form">
      <input
        type="hidden"
        name="subject"
        data-remove-prefix
        value="DRNSoftware Website Form Submission (%{submissionId})"
      />
      <input type="hidden" name="form-name" value="ask-question" />
      <!-- Honeypot field -->
      <div style="display: none">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </div>
      <!-- Your form fields -->
      <label>
        <input
          type="text"
          name="name"
          placeholder="Your name..*"
          v-model="state.name"
          required
        />
        <span class="error" v-if="v$.name?.$error">
          {{ v$.name.$errors[0].$message }}
        </span>
      </label>
      <label>
        <input
          type="email"
          name="email"
          placeholder="Your email..*"
          v-model="state.email"
          required
        />
        <span class="error" v-if="v$.email?.$error">
          {{ v$.email.$errors[0].$message }}
        </span>
      </label>
      <label>
        <textarea
          name="message"
          placeholder="Your message.."
          v-model="state.message"
          id=""
          cols="5"
          rows="10"
        ></textarea>
      </label>
      <button type="submit">SEND MESSAGE</button>
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

// .form-container {
//   background-image: linear-gradient(90deg, #00deff 0%, #7141b1 100%);
//   width: 45%;
//   padding: 2em;

//   .form {
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;

//     h2 {
//       color: white;
//       font-size: 2em;
//       font-weight: bold;
//       letter-spacing: 0.5px;
//       margin: 20px auto;
//     }

//     span {
//       text-align: center;
//       color: white;
//       font-size: 1em;
//       font-weight: bold;
//       letter-spacing: 0.5px;
//       margin: 0 0 20px 0;
//     }

//     label {
//       align-self: left;
//       width: 100%;
//       margin: 10px 0;

//       input,
//       textarea {
//         padding: 10px 2.5%;
//         width: 95%;
//       }

//       input {
//         background: rgba(255, 255, 255, 0.3);
//         border: none;

//         &::placeholder {
//           color: white;
//         }
//       }

//       .error {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         margin: 5px 0;
//         color: red;
//       }

//       textarea {
//         background: rgba(255, 255, 255, 0.3);
//         border: none;

//         &::placeholder {
//           color: white;
//         }
//       }
//     }

//     button {
//       width: 25%;
//       color: black;
//       background: white;
//       padding: 1em 2em;
//       border: none;
//       cursor: pointer;
//       font-weight: bold;

//       &:hover {
//         transition: all 0.3s linear;
//         background: $primary-color;
//         color: white;
//       }
//     }
//   }
// }

.form-container {
  background-image: linear-gradient(
    90deg,
    $primary-gradient-start 0%,
    $primary-gradient-end 100%
  );
  width: 45%;
  padding: 2em;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
      color: $primary-form-color;
      font-size: 2em;
      font-weight: bold;
      letter-spacing: 0.5px;
      margin: 20px auto;
    }

    span {
      text-align: center;
      color: $primary-form-color;
      font-size: 1em;
      font-weight: bold;
      letter-spacing: 0.5px;
      margin: 0 0 20px 0;
    }

    label {
      align-self: left;
      width: 100%;
      margin: 10px 0;

      input,
      textarea {
        padding: 10px 2.5%;
        width: 95%;
        background: $form-background;
        border: none;

        &::placeholder {
          color: $primary-form-color;
        }
      }

      .error {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px 0;
        color: red;
      }
    }

    button {
      width: 25%;
      color: black;
      background: $primary-form-color;
      padding: 1em 2em;
      border: none;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s linear;

      &:hover {
        background: $primary-gradient-start;
        color: white;
      }
    }
  }
}

@media (max-width: 1024px) {
  .form-container .form button {
    width: 30%;
  }
}

@media (max-width: 500px) {
  .form-container .form button {
    width: 50%;
  }
}
</style>
