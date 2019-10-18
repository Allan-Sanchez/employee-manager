import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import router from './router';
import store from './store';
import firebase from 'firebase';
import './components/firebaseInit';

Vue.use(Buefy);
Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});


