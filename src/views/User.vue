<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <!-- 下記の2つはほとんど同じ動きをするqueryの有無の為、URLが変化する -->
    <router-link :to="'/users/' + (Number(id) + 1 ) + '/profile?lang=ja'">次のユーザー</router-link>
    <router-link :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 }, query: { lang: 'ja', page: 2 } }">次のユーザー</router-link>
    <router-view></router-view>
    <button @click="toHome">Homeへ戻る</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    toHome() {
      this.$router.push('/')
    }
  },
  watch: {
    // 下記の記載をすることで前のURLの情報を取得することが可能
    $route(to, from) {
      console.log(to);
      console.log(from.params);
    }
  }
}
</script>

<style scoped>

</style>