import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { provideApolloClient } from '@vue/apollo-composable';
import PrimeVue from 'primevue/config';
import Notifications from 'notiwind'

import './assets/tailwind.css'
import 'primeicons/primeicons.css';


const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3002/graphql',
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});



const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(PrimeVue);
provideApolloClient(apolloClient);
app.use(Notifications)

app.mount('#app');
