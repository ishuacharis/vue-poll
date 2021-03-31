<template>
    <div class="profile">
        <div class="profile-content">
            <div class="profile-head">
                <div class="profile-pic">
                    <img :src="require('@/assets/boy.jpg')" alt="profile-picture">
                    <span>
                        <i class='bx bx-camera'></i>
                    </span>
                </div>
            </div>
            <div class="profile-body">
                <div>
                    <Form
                        @submit="onFormSubmit"
                        initial-value="formValues"
                        v-slot="{isSubmitting}"
                    >
                        <div class="field__content">

                            <div class="field">
                                <Field name="name" type="text" class="input thin-border" as="input" :value="name" />
                            </div>
                            <div class="field">
                                <Field name="email" type="text" class="input thin-border" as="input" :value="email" />
                            </div>
                            <div class="field">
                                <Field name="phone_no" type="text" class="input thin-border" as="input" :value="phone_no" />
                            </div>
                        </div>
                        <div class="field">
                            <button type="submit" class="btn btn-secondary" v-if="!isSubmitting">Save</button>
                            <div v-if="isSubmitting" class="loading"></div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Form, Field } from 'vee-validate';
    import { info} from "@/helpers"; 
    export default {
        components: { Form, Field },
        setup() {

            const onFormSubmit = (values) => {
                console.log(values)
            }
            const { name,email, phone_no } = info();
            console.log(name)
            return{
                formValues: {name: '', email: '', phone_no: ''},
                onFormSubmit,
                name,email,phone_no
            }
        }
    }
</script>

<style src="./Profile.css" scoped></style>