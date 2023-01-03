<script setup lang="ts">
import { ref } from 'vue';
let email = ref('');
let password = ref('');

function onSubmit(event: any) {
  console.log('event', event);
  console.log('email', email);
  console.log('email.value', email.value);
  console.log('password.value', password.value);
}
</script>
<template>
  <div class="login-page">
    <div class="container">
      <div class="card">
        <h1>Sign In</h1>
        <form v-on:submit.prevent="onSubmit">
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
            class="login-button"
            type="submit"
          />
        </form>
        <p>
          <a
            class="register-link"
            href="/register"
          >
            Register
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
  margin-left: 73%;
}
</style>
