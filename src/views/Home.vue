<template>
  <div className = "home">
    <div class="container">
      <nav class="nav">
        <ul class="navLinks">
          <li class="navItem">
            <router-link to="/" class="navLink">Home</router-link>
          </li>
          <li>
            <router-link to="/testing" class="navLink">Testing</router-link>
          </li>
          <li>
            <router-link to="/housemates" class="navLink">Projects</router-link>
          </li>
          <li>
            <router-link to="/gallery" class="navLink">Gallery</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',

}
</script>


<style>

</style>
