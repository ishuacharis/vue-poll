import { login, logout } from '@/routes';
import {  clearAll, setTotalVotes,  } from '../vote/actions/action_creators';
const USER = "user";
const TOKEN = "token";
const LOGGEDIN = "isLoggedIn";

export const authAction = {
    async login({ commit , dispatch }, { credentials}) {
        try{
            dispatch({ type: "error", credentials: null }, { root: true });
            const {response : { user,token  }} = await login(credentials)
            const {  votes } = user;
            commit({type: USER,credentials: user});
            commit({type: TOKEN,credentials: token});
            commit({type: LOGGEDIN,credentials: true});
            dispatch(setTotalVotes(votes), { root: true });
        } catch(e) {
            console.log(e.message)
            dispatch({ type: "error", credentials: e.message }, { root: true });
        }
    },

    async logout({dispatch, commit }, {  type, credentials }) {
        let action = type.split("/")[1];

        try {
            dispatch({ type: "loading", credentials: true }, { root: true });
            const { response: {  message } } = await logout(credentials);
            
            commit({type: action, credentials: message });
            commit({type: USER,credentials: null});
            commit({type: TOKEN,credentials: null});
            commit({type: LOGGEDIN,credentials: false});
            dispatch(clearAll(), { root: true} )
            dispatch({ type: "error", credentials: null }, { root: true });
            dispatch({ type: "loading", credentials: false }, { root: true });
        } catch (e) {
            dispatch({ type: "error", credentials: e.message }, { root: true });
            dispatch({ type: "loading", credentials: false }, { root: true });
        }
    } 
};