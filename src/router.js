import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/User.vue';
import UsersPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';


// Vue.useでプラグインを使用するということ、プラグインとはアプリ全体に影響を与えること
Vue.use(Router);

export default new Router({
  // 下記のmodeを指定することでURLの＃を削除する
  mode: "history",
  // urlとコンポーネントを紐づける記載をかく
  routes: [
    { path: '/', component: Home },
    { path: '/users', component: Users, name: "users" },
    // 下記のようにprops: trueを指定することでUsersのコンポーネントでURLの値を取得したい時URLのidと書くだけで取得可能になる
    { path: '/users/:id',
      component: Users,
      props: true,
      children: [
        // 上のURLに続けて別のroute-viewを呼び出したい時はchildrenを使用する
        // そうすることで、route-viewの中でroute-viewを呼び出すことが可能
        // childrenはpathを書くことにスラッシュは描かない
        { path: "posts", component: UsersPosts },
        // nameを指定することでパスの遷移時にnameで指定のURLへ遷移できるようになる
        { path: "profile", component: UsersProfile, name: "users-id-profile" }
      ] 
    },
          ]
});