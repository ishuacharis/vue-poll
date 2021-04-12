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

    logout({ commit }, payload) {
        let action = payload.type.split("/")[1];
        commit({
            type: action,
            credentials: payload.credentials
        });
    } 
};