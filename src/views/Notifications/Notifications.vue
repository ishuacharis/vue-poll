<template lang="html">
    
    <div class="notifications" v-if="notificationsObject">
        <Notification v-for="notification in notificationsObject.data"  
        :key="notification.id"
        :notification ="notification" 
        />
    </div>

</template>

<script>
    import { pusherClient } from '@/Context/PusherContext';
    import { onMounted, reactive} from 'vue';
    import routes from '@/routes';
    import { getUserId } from '@/helpers';
    import Notification from '@/components/Notification/Notification';
    export default {
        name: 'Notifications',
        components: {
            Notification
        },
        setup() {
            const { notifications } = routes();
            const notificationsObject = reactive({});
            const userId =  getUserId();
            let args = {
                endPoint: `/notifications/${userId}`,
                method: 'GET',
            }
            const userNotifications = async () => {
                const { response:{ message:m, notifications:{ data} } } = await notifications(args);
                notificationsObject.message = m
                notificationsObject.data = data
            }
            onMounted(userNotifications)
            const messageChannel = pusherClient.subscribe('login-channel');
            messageChannel.bind('login-event', function(data) {
                console.log(`notifications ${data}`);
            });
            return  {
                
                userNotifications,notificationsObject
            }
        }
        
    }
</script>

<style lang="css" scoped>
    @import 'Notifications.css';
</style>