<template lang="html">
    
    <div class="notifications" v-if="notificationsObject">
        <!-- <Notification /> -->
        {{ notificationsObject.data }}
    </div>

</template>

<script>
    import { pusherClient } from '@/Context/PusherContext';
    import { ref , onMounted, reactive} from 'vue';
    import routes from '@/routes';
    //import Notification from '@/components/Notification/Notification';
    export default {
        name: 'Notifications',
        components: {
            
        },
        setup() {
            const { notifications } = routes();
            const feedback  = ref([]);
            const notificationsObject = reactive({});
             let args = {
                    endPoint: "/notifications/3",
                    method: 'GET',
                }
            const userNotifications = async () => {
                feedback.value = await notifications(args);
                let { response:{ message:m, notifications:{ data} } } = feedback.value;
                notificationsObject.message = m
                notificationsObject.data = data
            }
            onMounted(userNotifications)
            const messageChannel = pusherClient.subscribe('login-channel');
            messageChannel.bind('login-event', function(data) {
                console.log(`notifications ${data}`);
            });
            return  {
                feedback,
                userNotifications,notificationsObject
            }
        }
        
    }
</script>

<style lang="css" scoped>
    @import 'Notifications.css';
</style>