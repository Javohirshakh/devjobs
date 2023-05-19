import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import MainPage from './components/MainPage.vue';

const routes = [
  { path: '/', component: MainPage },
  // Add other routes if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.component('MainPage', MainPage); // Register MainPage component globally
app.use(router);
app.mount('#app');
