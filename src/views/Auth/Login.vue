<template lang="html">
  <div class = "auth__container">
    <div class = "auth__content">
      <div class="auth__socials"></div>
      <div class="divider">
        <span class="line left"></span>
        <span class="or">OR</span>
        <span class="line right"></span>
      </div>
      <div class="field__content">
        <div class="field">
          <input type="email" class="input" placeholder="Email" />
        </div>
        <div class="field">
          <input type="password" class="input" placeholder="Password" />
        </div>
      </div>
      <div class="link">
        <router-link to="#" class="link-item">Forgot password?</router-link>
        <router-link :to="{path: '/auth', query: {a: 'register'}}" class="link-item">Dont have an account?</router-link>
      </div>
      <div class="field">
          <button class="btn" @click="$emit('change-route', 'register')">Login</button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {

    setup() {

        return {

        }
    }
  }
</script>

<style lang="css" scoped>

</style>
