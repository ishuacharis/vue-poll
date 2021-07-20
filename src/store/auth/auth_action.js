import { login, logout, updateProfile } from '@/routes';
import {  clearAll, setTotalVotes,  } from '../vote/actions/action_creators';
const USER = 'user';
const TOKEN = 'token';
const LOGGEDIN = 'isLoggedIn';
const LOADING = 'loading';
const ERROR = 'error';

export const authAction = {
  async login({ commit , dispatch }, { credentials }) {
    try{
      dispatch({ type: 'error', credentials: null }, { root: true });
      const { response : { user, token } } = await login(credentials)
      const { votes } = user;
      commit({ type: USER, credentials: user });
      commit({ type: TOKEN, credentials: token });
      commit({ type: LOGGEDIN, credentials: true });
      dispatch(setTotalVotes(votes), { root: true });
    } catch(e) {
      console.log(e.message)
      dispatch({ type: 'error', credentials: e.message }, { root: true });
    }
  },

  async logout({ dispatch, commit }, { type, credentials }) {
    let action = type.split('/')[1];

    try {
      dispatch({ type: LOADING, credentials: true }, { root: true });
      const { response: { message } } = await logout(credentials);
      commit({ type: action, credentials: message });
      commit({ type: USER, credentials: null });
      commit({ type: TOKEN, credentials: null });
      commit({ type: LOGGEDIN, credentials: false });
      dispatch(clearAll(), { root: true} );
      dispatch({ type: ERROR, credentials: null }, { root: true });
      dispatch({ type: LOADING, credentials: false }, { root: true });
    } catch (e) {
      dispatch({ type: ERROR, credentials: e.message }, { root: true });
      dispatch({ type: LOADING, credentials: false }, { root: true });
    }
  },

  async profile({ dispatch, commit }, { type, credentials }) {
    let action  = type.split('/')[1];

    try {

      dispatch({ type: LOADING, credentials: true }, { root: true } );
      const { response: { message, user } } = await updateProfile(credentials);
      commit({ type: action, credentials: message });
      commit({ type: USER, credentials: user });
      dispatch({ type: LOADING, credentials: false }, { root: true });

    } catch (e) {
      dispatch({ type: ERROR, credentials: e.message }, { root: true });
      dispatch({ type: LOADING, credentials: false }, { root: true });
    }
  },
};