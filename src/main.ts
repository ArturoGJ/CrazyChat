import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

import './assets/main.css';

// Import the PocketBase JS library
import client from '@/pocketbase';

// Import custom pocketBase type
import { pocketBaseSymbol } from '@/symbols/injectionSymbols';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.provide(pocketBaseSymbol, client);

app.mount('#app');
