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
    export default {

        name: 'Logout',

        setup() {
            const store  = useStore();
            let isLoading  =  ref(false);
            const {logout} = routes();
            const router  = useRouter();
            const token  = JSON.parse(getToken());
            
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
                    store.dispatch({
                        type: 'auth/logout',
                        credentials: ''
                    })
                    router.replace('/auth')
                }
            }
            return {
                signOut, isLoading, goBack
            }
        }
        
    }
</script>

<style lang="css">
    .logout-container {
        width: 100%;
        height:  100vh;
        background-color: rgb(197, 195, 195);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        max-width: 30rem;
        width: 100%;
        background-color: #fff;
        padding: 3rem;
        text-align: center;
    }

    .btn-logout {
        padding: 1rem 1.8rem;
        color: #fff;
        background-color: brown;
        font-size: 1.8rem;
        margin: 1rem;
        outline: none;
        border: none;
        border-radius: 2rem;
        cursor: pointer;
    }
    .btn-cancel {
        padding: 1rem 1.8rem;
        color: #000;
        background-color: gray;
        font-size: 1.8rem;
        margin: 1rem;
        outline: none;
        border: none;
        border-radius: 2rem;
        cursor: pointer;
    }
</style>