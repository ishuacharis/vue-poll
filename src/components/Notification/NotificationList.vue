<template  lang="html">
    <div class="notification">
        <div v-for="(userNotification, i) in userNotifications" :key=i>
            {{ userNotification.type }}
        </div>
    </div>
</template>


<script>
    import { ref } from 'vue';
    import routes from '@/routes';
    export default {
        name: 'NotificationList',
        
        async setup() {
            let res = ref(null)
            let userNotifications  = ref(null);
            const { notifications } = routes();
            let args = {
                endPoint: "/notifications/3",
                method: 'GET',
            };

            const response = await notifications(args);
            res.value =  response["response"]["notifications"]['data'];
            userNotifications.value =  res.value
            console.log(`response ${response}`);

            // const messageChannel = pusherClient.subscribe('login-channel');
            // messageChannel.bind('login-event', function(members) {
            //     console.log('login event loaded');
            //     console.log(members)
            // });

            return {
                userNotifications
            }
        }
    }
</script>

<style lang="css" src="./Notification.css" scoped>

</style>