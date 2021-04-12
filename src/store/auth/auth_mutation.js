export const authMutation = {
    isAuthenticating: (state,{credentials}) => state.isAuthenticating = credentials,
    user: (state,{credentials}) => state.user =  credentials,
    token: (state,{credentials}) => state.token =  credentials,
    isLoggingOut: (state,{credentials}) => state.isLoggingOut = credentials,
    logout: (state) => {
        state.user  = null;
        state.token = null;
    }
    
}; 