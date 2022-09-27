import * as Yup from 'yup'
export const signInSchema = Yup.object({
    email: Yup.string().email().required("Enter a Valid Email"),
    password: Yup.string().min(6).required("Enter Password")
});