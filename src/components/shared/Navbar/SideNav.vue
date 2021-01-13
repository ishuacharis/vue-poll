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

                <li class="sidenav-link">
                    <router-link to="#" class="sidenav-item">
                        Profile
                    </router-link>
                </li>

                <li class="sidenav-link">
                    <router-link to="#" class="sidenav-item">
                        Notifications
                    </router-link>
                </li>
                <li class="sidenav-link">
                    <router-link to="#" class="sidenav-item">
                        Messages
                    </router-link>
                </li>

                

            </div>
            <div class="bottom">

                <li class="sidenav-link">
                    <router-link :to="{path: '/logout'}" class="sidenav-item">
                        <div class="logout">
                            <div class="avatar avatar-small">
                                <img src="@/assets/vee.jpg" />
                            </div>
                            <div class="handle">
                                <span>{{  user.name }}</span>
                                <span>@{{ user.name }}</span>
                            </div>
                        </div>
                    </router-link>
                </li>

            </div>
        </ul>
    </div>
</template>


<script>
    import { computed,  } from 'vue';
    import { useStore } from 'vuex';
    export default {
        name: 'SideNav',

        setup() {
            const store = useStore();
         

            return {
                user: computed(() => store.getters['auth/user'] )
            };
        }
    };

</script>

<style lang="css" src="./SideNav.css" scoped> 

</style>