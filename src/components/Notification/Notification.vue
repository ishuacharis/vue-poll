<template  lang="html">
    <div class="notification" >
        {{ notificationType }}
    </div>
</template>

<script>
    import { ref } from 'vue';
    export default {
        name: 'Notification',
        props: {
            notification: Object
        },
        setup(props) {
            const notificationType = ref(props.notification.type)
            if (notificationType.value == 'UserLoginNotification') {
                notificationType.value = "You have just logged in"
            }
            return{
                notificationType
            }
        }
    }
</script>

<style lang="css" src="./Notification.css" scoped>

</style>