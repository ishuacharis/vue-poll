import store from '../store';

const USER = "USER";
const TOKEN = 'TOKEN';
//const HOUSEMATES = 'HOUSEMATES';

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


export const housemates = () => {
    
    return  JSON.parse(localStorage.getItem('HOUSEMATES')) || null
}

export const info = () => {
    
    return store.getters['auth/user'] ;

}
