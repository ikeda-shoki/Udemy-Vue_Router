<template>
  <nav>
    <h2>Users</h2>
    <!-- 下記は基本aタグになる。タグを指定したい時はtag="div"などで変更が可能 -->
    <!-- active-classは指定されたURLが表示されている時に適応されるclass -->
    <!-- しかしactive-classを使用するとそのURLが表示されている限りずっと適応される -->
    <!-- 例 '/'の場合はずっと/はあるのでずっと適応される -->
    <!-- それを防ぐ為にexact属性があり、これはURLと完全一致した場合のみ適応される -->
    <router-link to="/" active-class="link--active" exact>Home</router-link>
    <router-link to="/users" active-class="link--active">Users</router-link>
    <router-link to="/post" active-class="link--active">Posts</router-link>
  </nav>
</template>

<style scoped>
  nav {
    background-color: gray;
    height: 50px;
    width: 100%;
    text-align: center;
  }

  a {
    line-height: 50px;
    margin-right: 20px;
    color: black;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  .link--active {
    font-size: 25px;
  }
</style>