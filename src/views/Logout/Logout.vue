<template lang="html">
    <div class="logout-container">
        <div class="modal" v-if="!isLoading">
            <h1> Log out </h1>
            <button class="btn-cancel" @click="goBack"> Cancel </button>
            <button class="btn-logout" @click="signOut"> Log out </button>
        </div>
        <div class="loading" v-else></div>
    </div>

</template>

<script>
    import { ref } from 'vue';
    import routes  from '@/routes';
    import { getToken, deleteToken, deleteUser  } from '@/helpers';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { unauth } from '@/store/auth/actions/action_creators';
    export default {

        name: 'Logout',

        setup() {
            const store  = useStore();
            let isLoading  =  ref(false);
            const {logout} = routes();
            const router  = useRouter();
            const token  = getToken();
            console.log(token)
            const goBack = () => {
                router.back();
            }
            const signOut =  async () => {
                isLoading.value = true;
                let args = {
                    endPoint: "/logout",
                    method: 'POST',
                    token: token
                };
                const response = await logout(args);
                if ('response' in response) {
                    isLoading.value  = false;
                    deleteUser();
                    deleteToken();
                    store.dispatch(unauth(''))
                    router.replace('/auth')
                }
            }
            return {
                signOut, isLoading, goBack
            }
        }
        
    }
</script>

<style src="./Logout.css" scoped>
    
</style>