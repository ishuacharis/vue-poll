import { isLoggedIn } from "../../helpers";


const authUserGuard = (to,from,next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(!isLoggedIn()) {
            next({
                path: "/auth",
                query: { a: "login" }
            })
        }else{
            next();
        }
    } else {
        next();
    }
} 

const guestGuard = (to, from, next) => {
    if(to.matched.some(record =>  record.meta.guest )) {
        if( isLoggedIn() ) {
            next({
                path: "/"
            });
        } else{
            next();
        }
    } else{
        next();
    }
}

export { authUserGuard, guestGuard }