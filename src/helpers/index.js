import store from '../store';




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
