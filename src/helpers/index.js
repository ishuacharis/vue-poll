import store from '../store';

const USER = "USER";
const TOKEN = 'TOKEN';
const HOUSEMATES = 'HOUSEMATES';

export const setUser = (args) => {
    localStorage.setItem(USER, JSON.stringify(args))
}

export const setToken  = (args) => {
    localStorage.setItem(TOKEN, args) 
}

export const deleteUser =  () => {
    localStorage.removeItem(USER);
}

export const deleteToken =  () => {
    localStorage.removeItem(TOKEN);
}


export const isLoggedIn = () => {    
    return store.getters['auth/isLoggedIn'] || false;
};

export const getToken = () => {
    return store.getters['auth/token'] ;
}

export const getUserId = () => {
    
    return store.state.auth.user.id || null
}

export const housemates = () => {
    
    return  JSON.parse(localStorage.getItem('HOUSEMATES')) || null
}

export const setEviction = (args) => {
    localStorage.setItem(HOUSEMATES, JSON.stringify(args))
}

export const info = () => {
    
    return JSON.parse(localStorage.getItem("USER")); 
}


