<script setup lang="ts">
import { ref } from 'vue';
import ChatSidePannel from './ChatSidePannel.vue';
let email = ref('');
let password = ref('');
</script>
<template>
  <div class="chat-page-container">
    <div class="grid-item">
      <ChatSidePannel />
    </div>
    <div class="grid-item">Chat view with chat</div>
  </div>
</template>

<style>
.chat-page-container {
  display: grid;
  grid-template-columns: 35% 65%;
  padding: 10px;
  width: 100vw;
  height: 100vh;
}

.grid-item {
  background-color: #202c33;
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
  min-height: 0;
  display: flex;
}
</style>
