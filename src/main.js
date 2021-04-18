import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import axios from "axios";
// import { config } from 'vue/types/umd';

// 下記のdefaultsを設定することでaxiosを使用する際の共通部分を書くことができる
axios.defaults.baseURL =
`https://firestore.googleapis.com/v1/projects/${process.env.VUE_APP_FIREBASE_URL}/databases/(default)/documents`



// 共通化したエラー処理などを記載する際に使用する
// データを送る前に処理をする
const interceptorsRequest = axios.interceptors.request.use(
  config => {
    console.log('interceptors request', config);
    return config;
  },
  error => {
    // Promiseオブジェクトとは非同期処理の結果と結果の値を表すオブジェクト
    return Promise.reject(error)
  }
);
// データを送った後に処理をする
const interceptorsResponse = axios.interceptors.response.use(
  response => {
    console.log('interceptors request', response);
    return response;
  },
  error => {
    return Promise.reject(error)
  }
);

// 下記のような記載をすることで上記のuseを無効にすることが可能になる
axios.interceptors.request.eject(interceptorsRequest);
axios.interceptors.request.eject(interceptorsResponse);

Vue.config.productionTip = false;


// ページ遷移する前に全体で実行したい処理をかく、内容をガードしたい処理を記載する
// 必ずnext()を使用する必要がある
// router.beforeEach((to,next) => {
//   console.log("before_each");
//   if (to.path === '/users/1') {
//     next('/');
//   }
//   next();
// });

// 下記のrouterとstoreでvue_routerとvuexを読み込んでいる
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
