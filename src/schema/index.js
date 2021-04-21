import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
    name: Yup.string()
    .required('Name is required'),
    email: Yup.string()
    .email("Email is invalid")
    .required('Email is required'),
    phoneNo: Yup.string()
    .required('Phone number is required'),
    password: Yup.string()
    .required("Password is required")
    .min(4, "Password should be atleast 4 characters")
    .max(10, "Password should be not be more than 10 characters")
})

export const loginSchema = Yup.object().shape({
    email: Yup.string()
    .email("Email is invalid")
    .required('Email is required'),
    username: Yup.string()
    .required('Username is required'),
    password: Yup.string()
    .required("Password is required")
    .min(4, "Password should be atleast 4 characters")
    .max(10, "Password should be not be more than 10 characters")
})

export const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
    .email("Email is invalid")
    .required('Email is required'),
})

export const resetPasswordSchema = Yup.object().shape({
    token: Yup.string()
    .required('Token is required'),
    email: Yup.string()
    .email("Email is invalid")
    .required('Email is required'),
    password: Yup.string()
    .required("Password is required")
    .min(4, "Password should be atleast 4 characters")
    .max(10, "Password should be not be more than 10 characters")
});


export const registerFormValues = { name: '', email: '', phoneNo: '', password: '' };
export const loginFormValues =  { email: '', password: '' };
export const resetPasswordFormValues = { token: '', email: '',  password: ''};
export const  forgotPasswordFormValues = { email: '',  };