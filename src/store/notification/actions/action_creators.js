import { NOTIFICATIONS } from "./action_types";


export const notifications = (credentials) => ({
    type: NOTIFICATIONS,
    credentials: credentials
});