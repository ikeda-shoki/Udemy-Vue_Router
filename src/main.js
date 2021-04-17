import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

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
