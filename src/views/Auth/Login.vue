<template lang="html">
  <div class = "auth__container">
    <div class = "auth__content">
      <div class="auth">

     
        <div class="auth__socials"></div>
        <div class="divider">
          <span class="line left"></span>
          <span class="or">OR</span>
          <span class="line right"></span>
        </div>
        <div class="error" v-if="error">{{ error }}</div>  
        <Form 
            @submit="onFormSubmit" 
            :initial-values= "loginFormValues"
            :validation-schema="loginSchema" 
            v-slot="{ isSubmitting, meta: {dirty, valid}}"
          >
          <div class="field__content">
            <InputField name="email" type="email" placeholder="Email" />
            <InputField name="password" type="password"  placeholder="Password" />
          </div>
          <div class="link">
            <router-link :to="{path: '/forgot-password' }" class="link-item">Forgot password?</router-link>
            <router-link :to="{path: '/auth', query: {a: 'register'}}" class="link-item">Dont have an account?</router-link>
          </div>
          <div class="field">
              <button class="btn"  :disabled="!(dirty && valid) || isSubmitting" v-if="!isSubmitting">Login</button>
              <div v-if="isSubmitting" class="loading"></div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
 
<script>
  import {  computed } from 'vue';
  import { useRouter} from  'vue-router';
  import { useStore } from 'vuex';
  import {Form,} from  'vee-validate';
  import InputField from '@/components/shared/InputField';
  import {  loginSchema , loginFormValues} from '@/schema';
  import { auth } from '@/store/auth/actions/action_creators';
  export default {
    components: {Form,InputField,},
    name: 'Login',
    setup(){ 
   
      
      const router = useRouter();
      const store =  useStore() ;
      const loggedIn =  computed(() => store.getters["auth/isLoggedIn"])
      
      const onFormSubmit = async (values, {resetForm}) => {
        const data = {
          email: values.email,
          password: values.password
        };
        const args = {
          "endPoint": "/login",
          "method":  "POST",
          "body":  data
        };

         await store.dispatch(auth(args))
          if(loggedIn.value) {
            router.replace('/');
            resetForm()
          }
      }
      
      return {
        loginSchema, 
        onFormSubmit,
        loginFormValues,
        error: computed(() => store.getters.error )
      }
    }
  }
</script>

<style lang="css" scoped>

</style>
