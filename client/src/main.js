import Vue from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';
import firebase from 'firebase/app'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faHome,
    faUser,
    faUserPlus,
    faSignInAlt,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzAZERyNq8OaqsGuBTwGu4HIWVZ1n6CaA",
    authDomain: "hethongthongtin-52244.firebaseapp.com",
    databaseURL: "https://hethongthongtin-52244.firebaseio.com",
    projectId: "hethongthongtin-52244",
    storageBucket: "hethongthongtin-52244.appspot.com",
    messagingSenderId: "504401652273",
    appId: "1:504401652273:web:49114d7c671ae53b6a8310",
    measurementId: "G-99ZT0E5LQ4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuex);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');