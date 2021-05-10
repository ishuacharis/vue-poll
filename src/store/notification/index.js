import { notificationState } from './notification_state';
import { notificationGetter } from './notification_getter';
import { notificationAction } from './notification_action';
import { notificationMutation }  from './notification_mutation';

const notificationModule =  {
    namespaced: true,
    state: notificationState,
    getters: notificationGetter,
    actions: notificationAction,
    mutations: notificationMutation
};

export default notificationModule;