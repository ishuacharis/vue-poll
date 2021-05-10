import { login, logout } from '@/routes';
const USER = "user";
const TOKEN = "token";
const LOGGEDIN = "isLoggedIn";

export const authAction = {
    async login({ commit , dispatch }, { credentials}) {
        try{
            const {response : { user,token  }} = await login(credentials)
            commit({type: USER,credentials: user});
            commit({type: TOKEN,credentials: token});
            commit({type: LOGGEDIN,credentials: true});
        } catch(e) {

            dispatch({ type: "error", credentials: e.message }, { root: true });
        }
    },

    async logout({dispatch, commit }, {  type, credentials }) {
        let action = type.split("/")[1];

        try {
            dispatch({ type: "loading", credentials: true }, { root: true });
            const { response: {  message } } = await logout(credentials);
            console.log(message)
            commit({type: action, credentials: message });
            commit({type: USER,credentials: null});
            commit({type: TOKEN,credentials: null});
            commit({type: LOGGEDIN,credentials: false});
                
            dispatch({ type: "loading", credentials: false }, { root: true });
        } catch (e) {
            dispatch({ type: "error", credentials: e.message }, { root: true });
            dispatch({ type: "loading", credentials: false }, { root: true });
        }
    } 
};