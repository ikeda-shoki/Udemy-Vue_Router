<template>
  <div>
    <h2>ユーザーのプロフィール</h2>
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
  // 下記の記載で簡単にクエリを取得可能
  props: ["id"],
  methods: {
    toHome() {
      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>