import { createStore } from 'vuex'
import { getters } from './global/getters';
import { actions }  from './global/actions';
import { mutations } from './global/mutations';
import { state } from './global/state'
import voteModule from './vote';

const store = createStore({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    votes: voteModule
  }
})


export default store
