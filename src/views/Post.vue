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
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      name: "名前",
      comment: "コメント",
    };
  },
  methods: {
    createComment() {
      // axios.postの第一引数は送信するURLを記載
      axios.post(
        `https://firestore.googleapis.com/v1/projects/${process.env.VUE_APP_FIREBASE_URL}/databases/(default)/documents/comments`,
        {
          // fieldsはfirebaseで使用する決まった記載内容
          fields: {

          }
        }
      );
    }
  }
}
</script>

<style>

</style>