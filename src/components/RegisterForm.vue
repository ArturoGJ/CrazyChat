<script setup lang="ts">
import { pocketBaseSymbol } from '@/symbols/injectionSymbols';
import { inject, ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

// Inject the pocketbase client
const $pb = inject(pocketBaseSymbol);

// Init the store
const userStore = useUserStore();

// Router composable
const router = useRouter();

let username = ref('');
let name = ref('');
let email = ref('');
let password = ref('');
let passwordConfirm = ref('');

// Function to create a new user
const createUser = async () => {
  try {
    if (validateInput()) {
      // Create new user
      const user = await $pb?.collection('users').create({
        username: username.value,
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value,
      });

      if (user) {
        // Authenticate the user in order to set the username
        await authUser();

        // After succesfull user registration, redirect to dashboard
        // TODO: Change this.
        router.push({ path: '/login' });
      } else {
        console.error('Error creating user');
      }
    } else {
      alert("Password doesn't match");
    }
  } catch (error) {
    console.error('Error while creating user', error);
  }
};

// Function to authenticate the user based on email and password.
const authUser = async () => {
  try {
    // Authenticate the user via email and password
    const userData = await $pb
      ?.collection('users')
      .authWithPassword(email.value, password.value);
    if (userData) {
      userStore.userID = userData.record.id;
      userStore.userName = userData.record.profile?.userName;
      userStore.userProfileID = userData.record.profile?.id!;
      router.push({ path: 'login' });
    }
  } catch (error) {
    console.error('Error while authenticating user', error);
  }
};

// Function to validate input
const validateInput = () => {
  return password.value === passwordConfirm.value;
};
</script>
<template>
  <div class="login-page">
    <div class="container">
      <div class="card">
        <h1>Register</h1>
        <form v-on:submit.prevent="createUser">
          <input
            class="login-input"
            type="text"
            placeholder="Name"
            v-model="name"
            required
          />
          <input
            class="login-input"
            type="text"
            placeholder="Username"
            v-model="username"
            required
          />
          <input
            class="login-input"
            type="text"
            placeholder="Email"
            v-model="email"
            required
          />
          <input
            class="login-input"
            type="password"
            placeholder="Password"
            v-model="password"
            required
          />
          <input
            class="login-input"
            type="password"
            placeholder="Confirm password"
            v-model="passwordConfirm"
            required
          />
          <input
            class="login-button"
            type="submit"
          />
        </form>
        <p>
          <a
            class="register-link"
            href="/login"
          >
            Already have an account? Login
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.login-page {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container {
  width: 350px;
  margin: auto;
}

.card {
  width: 100%;
  box-shadow: 0 0px 16px 0 rgba(252, 250, 250, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 15px;
  background-color: rgba(57, 62, 60, 0.2);
}

.card:hover {
  box-shadow: 0 0px 24px 0 rgba(255, 255, 255, 0.2);
}

form {
  display: grid;
  place-items: center;
}

.login-input {
  width: 80%;
  height: 40px;
  padding: 8px 8px;
  margin: 8px 0;
  border-radius: 5px;
  display: inline-block;
  border: 1px solid rgb(121, 121, 121);
  background-color: rgb(241, 235, 224);
  color: black;
}

.login-button {
  width: 80%;
  height: 40px;
  padding: 8px 8px;
  margin: 8px 0;
  border-radius: 5px;
  display: inline-block;
  border: 1px solid rgb(121, 121, 121);
  background-color: rgb(57, 62, 70);
  color: rgba(241, 235, 224);
  transition: 0.2s;
}

.login-button:disabled {
  width: 80%;
  padding: 8px 8px;
  margin: 8px 0;
  border-radius: 5px;
  display: inline-block;
  border: 1px solid rgb(121, 121, 121);
  background-color: rgb(57, 62, 70);
  color: white;
  transition: 0.2s;
}

.login-button:hover:enabled {
  width: 80%;
  padding: 8px 8px;
  margin: 8px 0;
  border-radius: 5px;
  display: inline-block;
  border: 1px solid rgb(121, 121, 121);
  background-color: rgb(95, 98, 102);
  color: rgba(241, 235, 224);
  transition: 0.2s;
}
.register-link {
  margin-left: 25%;
}
</style>
