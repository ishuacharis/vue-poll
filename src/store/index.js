import { createStore } from 'vuex'
import { getters } from './global/getters';
import { actions }  from './global/actions';
import { mutations } from './global/mutations';
const store = createStore({
  state: () => {
    return {
      count: 4,
      todos: ["running"]
    }
  },
  getters: getters,
  mutations: mutations,
  actions: actions
})


export default store
