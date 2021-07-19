export const authMutation = {
    isAuthenticating: (state,{credentials}) => state.isAuthenticating = credentials,
    user: (state,{credentials}) => state.user =  credentials,
    token: (state,{credentials}) => state.token =  credentials,
    isLoggingOut: (state,{credentials}) => state.isLoggingOut = credentials,
    isLoggedIn: (state,{credentials}) => state.isLoggedIn = credentials,
    logout: (state, {credentials }) => {
        state.isAuthenticating = false,
        state.isLoggingOut = false,
        state.flash =  credentials
    }
    
}; 