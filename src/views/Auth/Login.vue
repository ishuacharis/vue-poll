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
          :initial-values= "formValues"
          :validation-schema="loginSchema" 
          v-slot="{ errors , isSubmitting, meta: {dirty, valid}}"
          >
          <div class="field__content">
            <InputField name="email" type="email" placeholder="Email" :error="errors" />
            <InputField name="password" type="password"  placeholder="Password" 
            :error="errors"  />
            
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
  import { ref } from 'vue';
  import { useRouter} from  'vue-router';
  import { useStore } from 'vuex';
  import {Form,} from  'vee-validate';
  import InputField from '@/components/shared/InputField';
  import schema from '@/schema';
  import routes from '@/routes';
  import { setUser, setToken } from '@/helpers';
  import { auth } from '@/store/auth/actions/action_creators';
  export default {
    components: {Form,InputField,},
    name: 'Login',
    setup(){ 
      const error = ref(null);
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
          
        try {
          const response = await login(args)
          if('response' in response) {
            setUser(response["response"]["user"]);
            setToken(response["response"]["token"]);
            store.dispatch(auth(response["response"]))
            resetForm()
            router.replace('/');
          }
        } catch (e) {
          error.value = e.message;
        }

      }

      
      return {
        loginSchema, 
        onFormSubmit,
        formValues:  { email: '', password: '' },
        error
      }
    }
  }
</script>

<style lang="css" scoped>

</style>
