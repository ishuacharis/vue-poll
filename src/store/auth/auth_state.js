export const authState = () => {
    return {
        user: null,
        token: null,
        isAuthenticating: false,
        isLoggingOut: false
    }
};