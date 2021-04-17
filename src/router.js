import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/User.vue';
import UsersPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';
import HomeHeader from './views/HomeHeader.vue';
import UsersHeader from './views/UsersHeader.vue';
import Post from './views/Post.vue'


// Vue.useでプラグインを使用するということ、プラグインとはアプリ全体に影響を与えること
Vue.use(Router);


export default new Router({
  // 下記のmodeを指定することでURLの＃を削除する
  mode: "history",
  // urlとコンポーネントを紐づける記載をかく
  routes: [
    // componentを複数置く場合はcomponentsと複数形にすることを気をつける
    // また名前付きコンポーネントを実装する際はpropsは名前ごとにtrueかfalseを指定する必要ある。
    { path: '/', components: {
      default: Home,
      header: HomeHeader,
    }, },
    { path: '/users', components: {
      default: Users,
      header: UsersHeader,
    },
      name: "users" },
    // 下記のようにprops: trueを指定することでUsersのコンポーネントでURLの値を取得したい時URLのidと書くだけで取得可能になる
    { path: '/users/:id',
      components: {
        default: UsersProfile,
        header: UsersHeader,
      },
      props: {
        default: true,
        header: false,
      },
      children: [
        // 上のURLに続けて別のroute-viewを呼び出したい時はchildrenを使用する
        // そうすることで、route-viewの中でroute-viewを呼び出すことが可能
        // childrenはpathを書くことにスラッシュは描かない
        { path: "posts", component: UsersPosts },
        // nameを指定することでパスの遷移時にnameで指定のURLへ遷移できるようになる
        { path: "profile", component: UsersProfile, name: "users-id-profile" }
      ]
    },
    { path: "/post",
      components: {
        default: Post,
        header: UsersHeader,
      }
    } ],
    // router-linkを使用して画面をスクロールする際の設定,URLが切り替わった際に実装される
    scrollBehavior(to, savedPosition) {
      // transitionがない場合
      // savedPositionは画面をスクロールしてその前に戻る場合は下記を指定すればsavedPositionで元に戻れる
      if (savedPosition) {
        return savedPosition
      }
      // offsetを指定することで画面遷移後にどれだけ余白を開けるかを指示することができる
      if (to.hash) {
        // ハッシュ(#)がURLに存在する時にrouter-linkで画面がスクロールするように変更している
        return {
          selector: to.hash,
        };
      }
      return { x: 0, y: 0, }

      // transitionがある場合
      // 少し難しいため必要になれば動画で確認
    }
});