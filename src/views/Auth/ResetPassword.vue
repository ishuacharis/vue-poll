<template>
    <div class="container">
        <div class = "auth__container">
            <div class = "auth__content">
                <div class="auth">   
                    <div class="error" v-if="error">{{ error }}</div>             
                    <Form 
                        @submit="onFormSubmit" 
                        :initial-values= "formValues"
                        :validation-schema="resetPasswordSchema" 
                        v-slot="{ errors , isSubmitting, meta: {dirty, valid}}"
                    >
                    <div class="field__content">
                        <InputField name="token" type="email" placeholder="Token" :error="errors" />                        
                        <InputField name="email" type="email" placeholder="Email" :error="errors" />                        
                        <InputField name="password" type="password" placeholder="Password" :error="errors" />                        
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
    import schema from '@/schema';
    import routes from '@/routes';
    import { useRouter } from 'vue-router';
    import { auth } from '@/store/auth/actions/action_creators';
    import { setUser, setToken } from '@/helpers';
    
    export default {
        name: "ResetPassword",
        components: {Form,InputField,},
        setup() {
            const error =  ref(null);
            const { resetPassword } = routes();
            const store =  useStore();
            const { resetPasswordSchema } = schema();
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
                        setUser(response["response"]["user"]);
                        setToken(response["response"]["token"]);
                        store.dispatch(auth(response["response"]))
                        router.replace('/housemates');
                    }
                } catch (e) {
                    error.value = e.message;
                    console.log(`error is ${e.message}`)
                }
            };

            return  {
                formValues:  { token: '', email: '',  password: ''},
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