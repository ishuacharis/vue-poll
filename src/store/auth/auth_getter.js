
export const authGetter = {

    isLoggedIn(state) {
        return state.token || false;
    },
    user(state) {
        return state.user;
    },
    token(state) {
        return state.token;
    },
    isAuthenticating(state) {
        return state.isAuthenticating;
    },
    isLoggingOut(state) {
        return state.isLoggingOut;
    },
}