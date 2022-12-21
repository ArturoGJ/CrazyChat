<script setup lang="ts">
import { ref } from 'vue';
let email = ref('');
let password = ref('');

function onSubmit(event) {
  if (event) {
    event.preventDefault();
  }
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
        <form v-on:submit="onSubmit">
          <input
            type="text"
            placeholder="Email"
            v-model="email"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  </div>
</template>
