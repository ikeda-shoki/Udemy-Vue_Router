<template>
  <div>
    <h1>HOME</h1>
    <button @click="toUsers">Usersページへ</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <!-- vuexでのformのデータの受け渡し2パターン -->
    <!-- <input type="text" :value="message" @input="updateMessage"> -->
    <input type="text" v-model="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  // vuexでの値を使用する場合は、computedに記載する
  // computed: {
  //   doubleCount() {
  //     return this.$store.getters.doubleCount;
  //   },
  //   tripleCount() {
  //     return this.$store.getters.tripleCount;
  //   }
  // },
  // 下記のmapGettersでstoreのgettersを選択して使うことが可能になる、下記は配列で取得しているが、オブジェクトで取得しても構わない
  // その場合、{ myCompornentComputed: "dobleCount"}にすることでmyCompornentComputedという名前で取得が可能
  // computed: mapGetters(["doubleCount", "tripleCount"]),
  // 他のcomputedも書きたい場合
  computed : {
    // 下記のスプレット演算子(ES6)を使用することでオブジェクトの中にオブジェクトを入れることが可能になる
    ...mapGetters(["doubleCount", "tripleCount"]),
    // message() {
    //   return this.$store.getters.message;
    // }
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value)
      },
    }
  },
  methods: {
    toUsers() {
      // メソッドでページ遷移する場合は下記のように記載する
      // $routerで現在のrouterにアクセスし、配列に遷移したいURLを追加する
      this.$router.push({
        name: 'users'
      })
    },
    // updateMessage(e) {
    //   this.$store.dispatch("updateMessage", e.target.value)
    // }
  }
}
</script>

<style scoped>

</style>