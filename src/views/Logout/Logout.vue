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
    import { computed, } from 'vue';
    import { getToken,  } from '@/helpers';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { unauth } from '@/store/auth/actions/action_creators';
    export default {
 
        name: 'Logout',

        setup() {
            const store  = useStore();
            const router  = useRouter();
            const token  = getToken();
            const loggedIn =  computed(() => store.getters["auth/isLoggedIn"]);
            const goBack = () => {
                router.back();
            }
            const signOut =  async () => {
                let args = {
                    endPoint: "/logout",
                    method: 'POST',
                    token: token
                };
                await store.dispatch(unauth(args))
                
                if(!loggedIn.value){
                    router.replace('/');
                }
            };
            return {
                signOut, goBack, 
                error: computed(() => store.getters.error),
                isLoading: computed(() => store.getters.loading)
            }
        }
        
    }
</script>

<style src="./Logout.css" scoped>
    
</style>