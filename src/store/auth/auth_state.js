export const authState = () => {
    return {
        user: JSON.parse(localStorage.getItem('USER')) || '',
        token: localStorage.getItem('TOKEN') || '',
        isAuthenticating: false,
        isLoggingOut: false
    }
};