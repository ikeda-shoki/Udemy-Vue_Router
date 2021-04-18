<template>
  <div class="post">
    <h1>Posts</h1>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム : </label>
    <input type="text" id="name" v-model="name">
    <p>{{ name }}</p>
    <br><br>
    <label for="comment">コメント : </label>
    <textarea id="comment" v-model="comment"></textarea>
    <p>{{ comment }}</p>
    <br>
    <button @click="createComment">コメントサーバーに送る！</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <div>名前 : {{ post.fields.name.stringValue }}</div>
      <div>コメント : {{ post.fields.comment.stringValue }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      name: "名前",
      comment: "コメント",
      posts: [],
    };
  },
  created() {
    axios.get("/comments")
    .then(response => {
      this.posts = response.data.documents;
    });
  },
  methods: {
    createComment() {
      // axios.postの第一引数は送信するURLを記載,第二引数は送信するデータ、第三引数はそのデータの設定
      axios.post(
        "/comments",
        {
          // fieldsはfirebaseで使用する決まった記載内容、下記の記載内容は各アプリケーションにあったものを使用
          fields: {
            name: {
              stringValue: this.name
            },
            comment: {
              stringValue: this.comment
            }
          }
        }
      )
      // postの引数ではなく、引数の外で下記で上記のpostが成功したらthenの内容が走る
      // .then(response => {
      //   console.log(response);
      // })
      // // 失敗したら下記の内容が走る
      // .catch(error => {
      //   console.log(error);
      // });

      this.name = "";
      this.comment = "";
    }
  }
}
</script>

<style>

</style>