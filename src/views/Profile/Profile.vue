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
                            <button type="submit" class="btn btn-secondary" v-if="!isSubmitting || !loading">Save</button>
                            <div v-if="isSubmitting || loading" class="loading"></div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Form, Field } from 'vee-validate';
    import { info, getToken } from "@/helpers"; 
    import { useStore } from 'vuex';
    import { profile } from '@/store/auth/actions/action_creators';
    import { computed } from '@vue/runtime-core';
    export default {
      components: { Form, Field },
      setup() {
        const { dispatch, getters } = useStore();
        const loading = computed(() => getters.loading );
        const { name, email, phone_no, id, } = info();
        const token = getToken();
        const onFormSubmit = async ({ email, name, phone_no }) => {
          const data = { email, name, phone_no };
          const args = {
            endPoint: `/profile/${id}`,
            method: 'PUT',
            body: data,
            token
          };
          await dispatch(profile(args));
        }
        return {
          formValues: {name: '', email: '', phone_no: ''},
          onFormSubmit,
          name, email, phone_no,
          loading
        }
      }
    }
</script>

<style src="./Profile.css" scoped></style>