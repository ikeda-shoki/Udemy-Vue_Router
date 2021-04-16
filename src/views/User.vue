<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
  </div>
</template>

<script>
export default {
  
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