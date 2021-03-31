<template  lang="html">
    <div class="notification">
        {{ type }}
    </div>
</template>

<script>
    import { toRefs } from 'vue';
    export default {
        name: 'Notification',
        props: {
            notification: Object
        },
        setup(props) {
            const { notification } = toRefs(props)
            let { type } = notification.value
            if (type == 'UserLoginNotification') {
                type = "Last loggedin"
            }
            return{
                type
            }
        }
    }
</script>

<style lang="css" src="./Notification.css" scoped>

</style>