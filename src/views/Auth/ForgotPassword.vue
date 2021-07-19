<template lang="html">
    <div class="container">
        <!-- <div class = "auth__container">
            <div class = "auth__content">
                <div class="auth">
                    <div class="error" v-if="error">{{ error }}</div>         
                    <Form 
                        @submit="onFormSubmit" 
                        :initial-values= "forgotPasswordFormValues"
                        :validation-schema="forgotPasswordSchema" 
                        v-slot="{ isSubmitting, meta: {dirty, valid}}"
                    >
                    <div class="field__content">
                        <InputField name="email" type="email" placeholder="Email" />                        
                    </div>
                    <div class="field">
                        <button class="btn"  :disabled="!(dirty && valid) || isSubmitting" v-if="!isSubmitting">Reset</button>
                        <div v-if="isSubmitting" class="loading"></div>
                    </div>
                    </Form>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script> 
    // import { ref }  from 'vue';
    // import {Form,} from  'vee-validate';
    // import { useRouter } from 'vue-router';
   
    // import InputField from '@/components/shared/InputField';
    // import { forgotPasswordSchema, forgotPasswordFormValues } from '@/schema';
    // //import { forgotPassword } from '@/routes';

    // export default {
    //     name: "ForgotPassword",
    //     components: {Form,InputField,},
    //     setup() {
    //         const error = ref(null);
    //         const router  = useRouter();
    //         const { forgotPassword } = routes();
           
    //         const onFormSubmit = async (values) => {
    //             const data = {
    //                 email: values.email
    //             }
    //             const args = {
    //                 "endPoint": "/forgot_password",
    //                 "method":  "POST",
    //                 "body":  data
    //             };
    //             try {
    //                 const response = await forgotPassword(args)
    //                 if('response' in response) {
    //                     router.push('/reset-password');
    //                 }
    //             } catch (e) {
    //                 error.value = e.message;
    //                 console.log(`error is ${e.message}`)
    //             }
    //         };

    //         return  {
    //            forgotPasswordFormValues,
    //             forgotPasswordSchema,
    //             onFormSubmit,
    //             error
    //         }
    //     }
    // }
</script>

<style lang="css" scoped>
    /* @import 'Auth.css'; */
</style>