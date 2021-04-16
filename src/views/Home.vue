<template>
  <div>
    <h1>HOME</h1>
    <button @click="toUsers">Usersページへ</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      // メソッドでページ遷移する場合は下記のように記載する
      // $routerで現在のrouterにアクセスし、配列に遷移したいURLを追加する
      this.$router.push({
        name: 'users'
      })
    }
  }
}
</script>

<style scoped>

</style>