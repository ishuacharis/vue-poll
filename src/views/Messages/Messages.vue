<template lang="html">
    <div class="messages">
        <Message />
    </div>
</template>

<script>
    import Message  from '@/components/Message/Message';
    
    export default {
        name: 'Messages',
        components: {
            Message
        },
        setup() {
            
        }
        
    }
</script>

<style lang="css" scoped>
    @import 'Messages.css';
</style>