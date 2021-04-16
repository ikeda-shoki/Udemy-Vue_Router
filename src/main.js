import Vue from 'vue'
import App from './App.vue'
import router from './router'

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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
