const USER = "USER";

const fetchUser = (key) => {
    return JSON.parse(localStorage.getItem(key)) || null;
};

const setUser = (args) => {
    localStorage.setItem(USER, JSON.stringify(args))
}

const deleteUser =  () => {
    localStorage.removeItem(USER);
}

const isLoggedIn = () => {
    const user  = fetchUser(USER);

    if(user == null)  return false;

    return user;
};

const getToken = () => {
    const user = fetchUser(USER);
    return user["response"]["token"];
}

export { isLoggedIn , setUser, getToken, deleteUser };