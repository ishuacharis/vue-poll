<template lang="html">
  <div class = "auth__container">
      <div class="auth__content">
        <div class="auth">
          <div class="auth__socials"></div>
          <div class="divider">
            <span class="line left"></span>
            <span class="or">OR</span>
            <span class="line right"></span>
          </div>
          <Form 
            @submit="onFormSubmit" 
            :validation-schema="registerSchema" 
            v-slot="{ errors, isSubmitting, meta: {dirty, touched} }">
            <div class="field__content">
              <InputField name="name" type="name" placeholder="Name" :error="errors" />
              <InputField name="email" type="text" placeholder="Email" :error="errors" />
              <InputField name="phoneNo" type="text" placeholder="Phone no" :error="errors" />
              <InputField name="password" type="password"  placeholder="Password" :error="errors" />
            </div>
            <div class="link">
              <router-link :to="{path: '/auth', query: {a: 'login'}}" class="link-item">Already have an account?</router-link>
            </div>
            <div class="field">
                <button 
                  class="btn" 
                  :class="{hide: isSubmitting}" 
                  :disabled="!(dirty && touched) || isSubmitting" v-if="!isSubmitting">
                  Create</button>
                  <div v-if="isSubmitting" class="loading"></div>
            </div>
          </Form>

        </div>
      </div>
    </div>
</template>

<script>
  import {Form,} from  'vee-validate';
  import InputField from '@/components/shared/InputField';
  import routes from '@/routes';
  import schema from '@/schema';
  import { useStore } from 'vuex';
  import { setUser, setToken } from '../../helpers';
import { useRouter } from 'vue-router';
  export default {
    components: {Form,InputField},
    setup() {     
      const {registerSchema} = schema();
      const {register} = routes();
      const store = useStore();
      const router = useRouter();
      const onFormSubmit = async (values) => {
        const data = {
          name: values.name,
          email: values.email,
          phone_no: values.phoneNo,
          password: values.password
        };
        const args = {
          "endPoint": "/register",
          "method":  "POST",
          "body":  data
          };
        const response = await register(args);
        if('response' in response) {
          setUser(response["response"]["user"]);
          setToken(response["response"]["token"]);
          store.dispatch({
            type: 'auth/login',
            credentials: response["response"]
          })
          router.replace("/housemates")
        }
      };

      return {
        registerSchema,onFormSubmit
      };
    }
  };
</script>

<style lang="css" scoped>
</style>
