<template>
    <div class="container">
        <div class = "auth__container">
            <div class = "auth__content">
                <div class="auth">   
                    <div class="error" v-if="error">{{ error }}</div>             
                    <Form 
                        @submit="onFormSubmit" 
                        :initial-values= "formValues"
                        :validation-schema="resetPasswordFormValues" 
                        v-slot="{  isSubmitting, meta: {dirty, valid}}"
                    >
                    <div class="field__content">
                        <InputField name="token" type="email" placeholder="Token" />                        
                        <InputField name="email" type="email" placeholder="Email" />                        
                        <InputField name="password" type="password" placeholder="Password" />                        
                    </div>
                    <div class="field">
                        <button class="btn"  :disabled="!(dirty && valid) || isSubmitting" v-if="!isSubmitting">Reset</button>
                        <div v-if="isSubmitting" class="loading"></div>
                    </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from 'vue';
    import {Form,} from  'vee-validate';
    import InputField from '@/components/shared/InputField';
    import { useStore } from 'vuex';
    import { resetPasswordSchema,resetPasswordFormValues } from '@/schema';
    import routes from '@/routes';
    import { useRouter } from 'vue-router';
    import { auth } from '@/store/auth/actions/action_creators';
    
    export default {
        name: "ResetPassword",
        components: {Form,InputField,},
        setup() {
            const error =  ref(null);
            const { resetPassword } = routes();
            const store =  useStore();
            
            const router = useRouter();
            const onFormSubmit = async (values) => {
                const data = {
                    token: values.token,
                    email: values.email,
                    password: values.password
                }
                const args = {
                    "endPoint": "/reset_password",
                    "method":  "POST",
                    "body":  data
                };
                try {
                    const response = await resetPassword(args)
                    if('response' in response) {
                        store.dispatch(auth(response["response"]))
                        router.replace('/housemates');
                    }
                } catch (e) {
                    error.value = e.message;
                    console.log(`error is ${e.message}`)
                }
            };

            return  {
                resetPasswordFormValues,
                resetPasswordSchema,
                onFormSubmit,
                error
            }
        }
    }
</script>

<style lang="css" scoped>
    @import 'Auth.css';
</style>