import { notifications } from '@/routes';


export const notificationAction = {
    async setNotifications ({ commit, dispatch, state }, { type, credentials }) {
        let action = type.split("/")[1];
        if(!state.notifications){
            try {
                dispatch({ type: "loading", credentials: true }, { root: true });
                const { response: {  notifications: { data }} } = await notifications(credentials);
                commit({
                    type: action,
                    credentials: data
                })
                dispatch({ type: "loading", credentials: false }, { root: true });
            } catch (e) {
                dispatch({ type: "error", credentials: e.message }, { root: true });
                dispatch({ type: "loading", credentials: false }, { root: true });
            }
        }else{
            dispatch({ type: "error", credentials: null }, { root: true });
            return commit({
                type: action,
                credentials: state.notifications
            })
        }
    }
}