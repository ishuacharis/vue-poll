import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import { getters } from './global/getters';
import { actions }  from './global/actions';
import { mutations } from './global/mutations';
import { state } from './global/state'
import voteModule from './vote';
import authModule from './auth';
import notificationModule from './notification';

const store = createStore({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    votes: voteModule,
    auth: authModule,
    notification: notificationModule
  },
  plugins: [createPersistedState()]
})


export default store
