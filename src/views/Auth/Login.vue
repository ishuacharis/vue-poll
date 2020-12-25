<template lang="html">
  <div class = "auth__container">
    <div class = "auth__content">
      <div class="auth__socials"></div>
      <div class="divider">
        <span class="line left"></span>
        <span class="or">OR</span>
        <span class="line right"></span>
      </div>
      <Form @submit="onFormSubmit" :validation-schema="loginSchema" v-slot="{ errors }">
        <div class="field__content">
          <InputField name="email" type="email" placeholder="Email" :error="errors.email"  />
          <InputField name="password" type="password"  placeholder="Password" :error="errors.password" />
        </div>
        <div class="link">
          <router-link to="#" class="link-item">Forgot password?</router-link>
          <router-link :to="{path: '/auth', query: {a: 'register'}}" class="link-item">Dont have an account?</router-link>
        </div>
        <div class="field">
            <button class="btn">Login</button>
        </div>
      </Form>
    </div>
  </div>
</template>
 
<script>
  //import {ref} from  'vue'
  import {Form,} from  'vee-validate'
  import InputField from '@/components/shared/InputField'
  import schema from '@/schema'
  import routes from '@/routes'
  const {login} = routes()
  const {loginSchema} = schema()
  export default {
    components: {Form,InputField},
    setup(){
      
      const onFormSubmit = async (values) => {
        const data = {
          email: values.email,
          password: values.password
        };
        const args = {
          "endPoint": "/login",
          "method":  "POST",
          "body":  data
          };
        
        const response = await login(args)
        console.log(response)
      }
      
      
      return {
        loginSchema, onFormSubmit,
      }
    }
  }
</script>

<style lang="css" scoped>

</style>
