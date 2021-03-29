<template lang="html">
    
    <div class="notifications" v-if="notificationsObject">
        <template v-if="isLoading">
            <div class="loading-container">
                <div class="loading"></div>
            </div>
        </template>
        <template v-if="!isLoading">

            <Notification v-for="notification in notificationsObject.data"  
            :key="notification.id"
            :notification ="notification" 
            />
        </template>
    </div>

</template>

<script>
    import { pusherClient } from '@/Context/PusherContext';
    import { onMounted, reactive, ref} from 'vue';
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
            const isLoading = ref(true);
            const userId =  getUserId();
            const count  = ref(10)
            let args = {
                endPoint: `/notifications/${userId}`,
                method: 'GET',
            }
            const userNotifications = async () => {
                const { response:{ message:m, notifications:{ data} } } = await notifications(args);
                notificationsObject.message = m
                notificationsObject.data = data
                isLoading.value = false
            }
            onMounted(() => {
                userNotifications()
                scroll()
            })
            const messageChannel = pusherClient.subscribe('login-channel');
            messageChannel.bind('login-event', function(data) {
                console.log(`notifications ${data}`);
            });
            const scroll = () => {
                window.onscroll = () => {
                    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

                    if(bottomOfWindow) {
                        
                        count.value += 5
                        console.log(count.value)
                    }
                }
            }
            return  {
                
                userNotifications,notificationsObject, isLoading
            }
        }
        
    }
</script>

<style lang="css" scoped>
    @import 'Notifications.css';
</style>