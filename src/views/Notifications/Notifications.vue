<template lang="html">
    
    <div class="notifications">
        <template v-if="isLoading">
            <div class="loading-container">
                <div class="loading"></div>
            </div>
        </template>
        <template v-if="error">
            <div class="loading-container">
                <div class="error"> {{ error }} </div>
            </div>
        </template>
        <template v-if="!isLoading && !error">

            <Notification v-for="notification in notificationsObject"  
            :key="notification.id"
            :notification ="notification" 
            />
        </template>
    </div>

</template>

<script>
    import { pusherClient } from '@/Context/PusherContext';
    import { computed, onMounted, ref} from 'vue';
    import Notification from '@/components/Notification/Notification';
    import { getToken, info } from '@/helpers';
    import { useStore } from 'vuex';
    import { notifications } from '@/store/notification/actions/action_creators.js';
    export default {
        name: 'Notifications',
        components: {
            Notification
        },
        setup() {
     
            const { id } =  info();
            const count  = ref(10)
            const store  = useStore();
            const token = getToken()
            let args = {
                endPoint: `/notifications/${id}`,
                method: 'GET',
                token: token
            }
            const userNotifications = async () => {
                await store.dispatch(notifications(args));
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
                userNotifications,
                notificationsObject: computed(() => store.getters["notification/notifications"]),
                isLoading: computed(() => store.getters.loading),
                error: computed(() => store.getters.error)
            }
        }
        
    }
</script>

<style lang="css" scoped>
    @import 'Notifications.css';
</style>