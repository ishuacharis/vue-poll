import routes from '@/routes';
const { logout, login } = routes();
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