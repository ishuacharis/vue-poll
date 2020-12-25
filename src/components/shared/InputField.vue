<template lang="html">
    <div class="field">
        <Field 
            :name="props.name" 
            :type="props.type" 
            class="input" 
            :placeholder="props.placeholder" />
        <ErrorMessage :name="props.name" class="error" />
    </div>
</template>

<script>
    import {Field,ErrorMessage} from 'vee-validate'
    export default {
        name: 'InputField',
        components: {
            Field, ErrorMessage
        },
        props: {
            placeholder: String,
            type: String,
            name: String,
            error: String
        },
        setup(props) {
            return {props}
        }
    }
</script>