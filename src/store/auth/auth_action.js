import routes from '@/routes';
const { logout } = routes();
const USER = "user";
const TOKEN = "token";
const LOGGEDIN = "isLoggedIn";

export const authAction = {
    login({ commit  }, { credentials: { user, token } }) {
        commit({
            type: USER,
            credentials: user
        })
        commit({
            type: TOKEN,
            credentials: token
        })
        commit({
            type: LOGGEDIN,
            credentials: true
        })
    },

    logout({dispatch, commit }, {  type, credentials }) {
        let action = type.split("/")[1];
        
        dispatch({ type: "loading", credentials: true }, { root: true });
        
        return logout(credentials).then(() => {
            
            commit({type: action,});
            
            dispatch({ type: "loading", credentials: false }, { root: true });
        }).catch(() => {
            
            dispatch({ type: "loading", credentials: false }, { root: true });
        })
    } 
};