<template lang="html">
    <div class="sidenav"  @click="backgroundClick">
        <div class="logout__tooltip">
            <div class="logout-tooltip__content" :class="{'active': showToolTip}">
                <div class="logout-tooltip__item">
                    <div class="logout">
                        <div class="logout-left">
                            <div class="avatar avatar-small">
                                <img src="@/assets/vee.jpg" />
                            </div>
                            <div class="handle">
                                <span>{{  user.name }}</span>
                                <span>@{{ user.name }}</span>
                            </div>
                        </div>
                        <div class="logout-right">
                            <i class='bx bx-check'></i>
                        </div>
                    </div>
                </div>
                <div class="logout-tooltip__item">
                    <div class="logout">
                        <div class="logout-left">
                            <router-link :to="{path:  '/messages'}" class="bottom-sidenav__item">
                                <li class="bottom-sidenav__link">
                                    Add an existing account
                                </li>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="logout-tooltip__item">
                        <div class="logout">
                            <div class="logout-left">
                                <div class="bottom-sidenav__link">
                                    <router-link :to="{path:  '/logout'}" class="bottom-sidenav__item">
                                        Log out @{{ user.name }}
                                    </router-link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="sidenav-top" :class="{'offback': showToolTip}">
            <ul class="sidenav-links">
                 <router-link :to="{path: '/'}" class="sidenav-item">
                    <li class="sidenav-link">
                        <span><i class='bx bx-home'></i></span>
                        <span>Home</span>
                    </li>
                 </router-link>
                 <router-link to="#" class="sidenav-item">
                    <li class="sidenav-link" >
                       <span><i class='bx bx-folder'></i></span>
                        <span>Dashboard</span>
                    </li>
                 </router-link>
                 <router-link to="#" class="sidenav-item">
                    
                   <li class="sidenav-link" >
                       <span><i class='bx bx-user'></i></span>
                        <span>Profile</span>
                    </li>
                 </router-link>
                 <router-link :to="{path:  '/notifications'}" class="sidenav-item">
                    <li class="sidenav-link" >
                       <span><i class='bx bx-bell'></i></span>
                        <span>Notifications</span>
                    </li>
                 </router-link>
                 <router-link :to="{path:  '/messages'}" class="sidenav-item">
                    <li class="sidenav-link" >
                      <span><i class='bx bx-envelope'></i></span>
                        <span>Messages</span>
                    </li>
                 </router-link>               
            </ul>
        </div>
        <div class="bottom">
            <li class="sidenav__link-bottom">
                <button type="button" class="bottom-logout__btn" @click.stop="popToolTip">
                    <div class="logout">
                        <div class="logout-left">
                            <div class="avatar avatar-small">
                                <img src="@/assets/vee.jpg" />
                            </div>
                            <div class="handle">
                                <span>{{  user.name }}</span>
                                <span>@{{ user.name }}</span>
                            </div>
                        </div>
                        <div class="logout-right">
                            <i class='bx bx-dots-horizontal-rounded'></i>
                        </div>
                    </div>
                </button>
            </li>
        </div>
    </div>
</template>


<script>
    import { computed, ref } from 'vue';
    import { useStore } from 'vuex';
    export default {
        name: 'SideNav',

        setup() {
            const showToolTip = ref(false);
            const disableBack = ref(false);
            const store = useStore();
            const popToolTip = () => {
                if(showToolTip.value) {
                    showToolTip.value = false
                } else{

                    showToolTip.value = true;
                }
                console.log("tool tip poped");
            }
            const backgroundClick = () => {
                if(disableBack.value) {
                    disableBack.value = false
                } else{

                    disableBack.value = true;
                }
                console.log("background clicked");
            }

            return {
                user: computed(() => store.getters['auth/user'] ),
                popToolTip,showToolTip,backgroundClick
            };
        }
    };

</script>

<style lang="css" src="./SideNav.css" scoped> 

</style>