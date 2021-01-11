<template lang="html">
    <div class="sidenav">
        <ul class="sidenav-links">
            <div class="sidenav-top">

                <li class="sidenav-link">
                    <router-link to="#" class="sidenav-item">
                        Home
                    </router-link>
                </li>
                <li class="sidenav-link">
                    <router-link to="#" class="sidenav-item">
                        Dashboard
                    </router-link>
                </li>

            </div>
            <div class="bottom">

                <li class="sidenav-link">
                    <button type="button" class="sidenav-item" @click="signOut">
                        <div class="logout">
                            <div class="avatar avatar-small">
                                <img src="@/assets/vee.jpg" />
                            </div>
                            <div class="handle">
                                <span>Olawaley</span>
                                <span>@ibreaktherules</span>
                            </div>
                        </div>
                    </button>
                </li>

            </div>
        </ul>
    </div>
</template>


<script>
    import routes  from '@/routes';
    import { getToken, deleteUser } from '@/helpers';
    import { useRouter } from 'vue-router';
    export default {
        name: 'SideNav',
        setup() {
            const {logout} = routes();
            const router  = useRouter();
            const signOut =  async () => {
                
                let args = {
                    endPoint: "/logout",
                    method: 'POST',
                    token: getToken()
                };
                const response = await logout(args);
                if ('response' in response) {
                    console.log("feedback")
                    deleteUser();
                    router.replace('/auth')
                }
            }
            return {
                signOut
            }
        }
    }

</script>

<style lang="css" src="./SideNav.css" scoped> 

</style>