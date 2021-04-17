import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2,
    message: "記入例",
  },
  // 複数のコンポーネントでcomputedとして使用する場合、gettersに記載することでどのコンポーネントからでも$store.gettersで
  // 呼び出すことが可能
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
    message: state => state.message,
  },
  // mutationsを使用してでしかデータを変えることができなくなる
  // vuexでデータを変更する際には必ずmutationsを使用してデータを変更するようにしよう！
  // 非同期の処理は記載することができない
  mutations: {
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    },
    updateMessage(state, newMessage) {
      state.message = newMessage
    }
  },
  // 主に非同期の処理を実装する時に使用する。(同期の処理を書いても構わない)
  // 呼びたす時はdispatchで使用する
  // データを変更する際はactionsでmutationsを使用して全て変更するという選択肢も大いに使用される
  actions: {
    increment({ commit }, number) {
      commit("increment", number);
    },
    decrement({ commit }, number) {
      commit("decrement", number);
    },
    updateMessage({ commit }, nextMessage) {
      commit("updateMessage", nextMessage)
    }
  }
})