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
    import { computed, ref } from 'vue';
    import { getToken,  } from '@/helpers';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { unauth } from '@/store/auth/actions/action_creators';
    export default {

        name: 'Logout',

        setup() {
            const store  = useStore();
            let error  = ref(null);
            const router  = useRouter();
            const token  = getToken();
            const goBack = () => {
                router.back();
            }
            const signOut =  () => {
                let args = {
                    endPoint: "/logout",
                    method: 'POST',
                    token: token
                };
                store.dispatch(unauth(args)).then(() => {
                    router.replace('/auth')
                }).catch((e) => {
                    error.value = e;
                } );
            };
            return {
                signOut, goBack, error,
                isLoading: computed(() => store.getters.loading)
            }
        }
        
    }
</script>

<style src="./Logout.css" scoped>
    
</style>