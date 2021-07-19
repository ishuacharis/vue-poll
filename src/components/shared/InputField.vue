<template lang="html">
    <div class="field">
        <input 
            :name="name"
            :placeholder="placeholder"
            :type="type"
            :value="InputValue"
            class="input"
            @input="handleChange"
            @blur="handleBlur"
        />
        <p v-show="errorMessage || meta.valid">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script>
    import { toRefs } from 'vue';
    import {useField} from 'vee-validate'
    export default {
        name: 'InputField',
        components: { },
        props: {
            placeholder: {
                type: String,
                required: true
            },
            type: {
                type:String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            value: {
                type: String,
                default: ""
            }            
        },
        setup(props) {
            const { name,value } = toRefs(props);
            const { value: InputValue, errorMessage, handleChange, handleBlur,meta  } 
             = useField(
                name, undefined, {
                    initialValue: value
                }
            );
            return {
                InputValue, errorMessage, handleChange, handleBlur, meta,
            }
        }
    }
</script>