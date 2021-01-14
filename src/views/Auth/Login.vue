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
        <Form 
          @submit="onFormSubmit" 
          :validation-schema="loginSchema" 
          v-slot="{ errors , isSubmitting, meta: {dirty, touched}}"
          >
          <div class="field__content">
            <InputField name="email" type="email" placeholder="Email" :error="errors" />
            <InputField name="password" type="password"  placeholder="Password" 
            :error="errors"  />
            
          </div>
          <div class="link">
            <router-link to="#" class="link-item">Forgot password?</router-link>
            <router-link :to="{path: '/auth', query: {a: 'register'}}" class="link-item">Dont have an account?</router-link>
          </div>
          <div class="field">
              <button class="btn"  :disabled="!(dirty && touched) || isSubmitting" v-if="!isSubmitting">Login</button>
              <div v-if="isSubmitting" class="loading"></div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
 
<script>
  import { useRouter} from  'vue-router';
  import { useStore } from 'vuex';
  import {Form,} from  'vee-validate';
  import InputField from '@/components/shared/InputField';
  import schema from '@/schema';
  import routes from '@/routes';
  import { setUser, setToken } from '@/helpers';
  export default {
    components: {Form,InputField,},
    name: 'Login',
    setup(){
      const {login} = routes();
      const {loginSchema} = schema();
      const router = useRouter();
      const store =  useStore() ;
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
          resetForm()
        try {
          const response = await login(args)
          if('response' in response) {
             setUser(response["response"]["user"]);
             setToken(response["response"]["token"]);
              store.dispatch({
                type: 'auth/login',
                credentials: response["response"]
              })
             router.push('/housemates');
          }
        } catch (e) {
          console.log(`error is ${e}`)
        }

      }

      
      return {
        loginSchema, onFormSubmit,
      }
    }
  }
</script>

<style lang="css" scoped>

</style>
