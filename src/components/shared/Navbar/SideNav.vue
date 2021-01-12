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
                    <router-link :to="{path: 'logout'}" class="sidenav-item" >
                        <div class="logout">
                            <div class="avatar avatar-small">
                                <img src="@/assets/vee.jpg" />
                            </div>
                            <div class="handle">
                                <span>Olawaley</span>
                                <span>@ibreaktherules</span>
                            </div>
                        </div>
                    </router-link>
                </li>

            </div>
        </ul>
    </div>
</template>


<script>
   
    export default {
        name: 'SideNav',
        setup() {
            
        }
    }

</script>

<style lang="css" src="./SideNav.css" scoped> 

</style>