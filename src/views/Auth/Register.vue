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
          <div class="error" v-if="error">{{ error }}</div>  
          <Form 
            @submit="onFormSubmit" 
            :validation-schema="registerSchema" 
            :initial-values="registerFormValues"
            v-slot="{  isSubmitting, meta: {dirty, valid} }">
            <div class="field__content">
              <InputField name="name" type="name" placeholder="Name"  />
              <InputField name="email" type="text" placeholder="Email"  />
              <InputField name="phoneNo" type="text" placeholder="Phone no"  />
              <InputField name="password" type="password"  placeholder="Password"  />
            </div>
            <div class="link">
              <router-link :to="{path: '/auth', query: {a: 'login'}}" class="link-item">Already have an account?</router-link>
            </div>
            <div class="field">
                <button 
                  class="btn" 
                  :class="{hide: isSubmitting}" 
                  :disabled="!(dirty && valid) || isSubmitting" v-if="!isSubmitting">
                  Create</button>
                  <div v-if="isSubmitting" class="loading"></div>
            </div>
          </Form>

        </div>
      </div>
    </div>
</template>

<script>
  import {ref} from 'vue';
  import {Form,} from  'vee-validate';
  import InputField from '@/components/shared/InputField';
  import routes from '@/routes';
  import { registerSchema ,registerFormValues } from '@/schema';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import { auth } from '@/store/auth/actions/action_creators';
  export default {
    components: {Form,InputField},
    setup() {     
      const error = ref(null);
    
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
        try {
          
          const response = await register(args);
          if('response' in response) {
            store.dispatch(auth(response["response"]))
            router.replace("/housemates")
          }
        } catch (e) {
          error.value  = e.message;
        }
      };

      return {
        registerSchema,
        onFormSubmit,
        registerFormValues,
        error
      };
    }
  };
</script>

<style lang="css" scoped>
</style>
