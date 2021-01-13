export const authAction = {
    login(context, payload) {
        let action = payload.type.split("/")[1];
        return context.commit({
            type: action,
            credentials: payload.credentials
        });
    },

    logout(context,payload) {
        let action = payload.type.split("/")[1];
        return context.commit({
            type: action,
            credentials: payload.credentials
        });
    }
};