<template lang="html">
    <div class="notifications">
        <Notification />
    </div>
</template>

<script>
    import Notification from '@/components/Notification/Notification.vue';
    export default {
        name: 'Notifications',
        components: {
            Notification
        },
        setup() {
            
        }
        
    }
</script>

<style lang="css" scoped>
    @import 'Notifications.css';
</style>