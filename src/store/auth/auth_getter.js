
export const authGetter = {

    isLoggedIn: (state) => state.token,
    user: (state) => state.user,
    token: (state) => state.token,
    isAuthenticating: (state) => state.isAuthenticating,
    isLoggingOut: (state) => state.isLoggingOut ,
}