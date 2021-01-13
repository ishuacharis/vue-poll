export const authMutation = {
    login(state,payload) {
        state.user = payload.credentials.user;
        state.token = payload.credentials.token;
       
    },
    logout(state) {
        state.user  = '';
        state.token = '';
    }
};