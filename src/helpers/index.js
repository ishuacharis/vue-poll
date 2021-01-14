import store from '../store';

const USER = "USER";
const TOKEN = 'TOKEN';


const setUser = (args) => {
    localStorage.setItem(USER, JSON.stringify(args))
}

const setToken  = (args) => {
    localStorage.setItem(TOKEN, args) 
}

const deleteUser =  () => {
    localStorage.removeItem(USER);
}

const deleteToken =  () => {
    localStorage.removeItem(TOKEN);
}


const isLoggedIn = () => {    
    return store.getters['auth/isLoggedIn'] || false;
};

const getToken = () => {
    
    return store.getters['auth/token'] ;
}

export { isLoggedIn , setUser, getToken, deleteUser,setToken, deleteToken };




