const USER = "USER";

const fetchUser = (key) => {
    return JSON.parse(localStorage.getItem(key)) || null;
};

const setUser = (args) => {
    localStorage.setItem(USER, JSON.stringify(args))
}

const isLoggedIn = () => {
    const user  = fetchUser(USER);

    if(user == null)  return false;

    return user;
};

export { isLoggedIn , setUser };