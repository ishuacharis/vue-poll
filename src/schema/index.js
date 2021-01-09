import * as Yup from 'yup'
export default function() {
    const registerSchema = Yup.object().shape({
        email: Yup.string()
        .email("Email is invalid")
        .required('Field is required'),
        password: Yup.string()
        .required("Field is required")
        .min(4, "Password should be atleast 4 characters")
        .max(10, "Password should be not be more than 10 characters")
    })

    const loginSchema = Yup.object().shape({
        email: Yup.string()
        .email("Email is invalid")
        .required('Field is required'),
        username: Yup.string()
        .required('Field is required'),
        password: Yup.string()
        .required("Field is required")
        .min(4, "Password should be atleast 4 characters")
        .max(10, "Password should be not be more than 10 characters")
    })

    return {
        loginSchema, registerSchema
    }
}