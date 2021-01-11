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
              <InputField name="email" type="email" placeholder="Email" :error="errors" />
              <InputField name="password" type="password"  placeholder="Password" :error="errors" />
            </div>
            <div class="link">
              <router-link :to="{path: '/auth', query: {a: 'login'}}" class="link-item">Already have an account?</router-link>
            </div>
            <div class="field">
                <button class="btn" :disabled="!(dirty && touched) || isSubmitting">Login</button>
            </div>
          </Form>

        </div>
      </div>
    </div>
</template>

<script>
  import {Form,} from  'vee-validate'
  import InputField from '@/components/shared/InputField'
  import routes from '@/routes'
  import schema from '@/schema'
  const {registerSchema} = schema()
  const {register} = routes()
  export default {
    components: {Form,InputField},
    setup() {     
      const onFormSubmit = async (values) => {
        const data = {
          email: values.email,
          password: values.password
        }
        const args = {
          "endPoint": "/register",
          "method":  "POST",
          "body":  data
          };
        const response = await register(args)
        console.log(response)
      }

      return {
        registerSchema,onFormSubmit
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
