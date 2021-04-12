const USER = "user";
const TOKEN = "token";
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
    },

    logout({ commit }, payload) {
        let action = payload.type.split("/")[1];
        commit({
            type: action,
            credentials: payload.credentials
        });
    } 
};