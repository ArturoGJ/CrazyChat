<script setup lang="ts">
import { ref } from 'vue';
let email = ref('');
let password = ref('');
//let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let arr = [0, 0, 0, 0, 0];
</script>
<template>
  <div class="chat-pannel-container">
    <div class="pannel-header-item">
      <div class="header-cell-container">
        <div class="profile-pic-container">
          <img class="profile-pic" alt="avatar" src="https://avatars.dicebear.com/api/identicon/CrazyArt.svg" />
        </div>
        <div class="chat-information-container">
          <div>Arturo</div>
        </div>
      </div>
    </div>
    <div class="chat-cells-container">
      <div v-for="(num, index) in arr" class="chat-item">
        <div class="chat-cell-container">
          <div class="profile-pic-container">
            <img class="profile-pic" alt="avatar" :src='`https://avatars.dicebear.com/api/identicon/oski${index}.svg`' />
          </div>
          <div class="chat-information-container">
            <div>Name</div>
            <div>Last Message</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.header-cell-container {
  display: flex;
  flex-direction: row;
}

.profile-pic {
  border-radius: 50%;
  width: 50px;
}

.chat-information-container {
  display: flex;
  flex-direction: column;
  background-color: rgb(15, 51, 59);
  flex-grow: 4;
}

.chat-cell-container {
  display: flex;
  flex-direction: row;
}

.chat-pannel-container {
  display: flex;
  flex-direction: column;
  background-color: white;
  font-size: 20px;
  flex-grow: 1;
}

.chat-cells-container {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex-grow: 1;
  background-color: #202c33;
}

.pannel-header-item {
  background-color: #202c33;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  text-align: center;
}

.chat-item {
  background-color: #1b252b;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  text-align: center;
}

/* scrollbar */
/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #202c33;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #555;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(117, 117, 117);
}
</style>
