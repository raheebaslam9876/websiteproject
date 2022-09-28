import React from 'react'
import myImg from '../Images/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg'
import { useFormik } from 'formik'
import { signInSchema } from '../schemas/SignInSchema'
import { NavLink } from 'react-router-dom'
const initialValues = {
    email: '',
    password: ''
}
const SignUp = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signInSchema,
        onSubmit: (values, action) => {
            action.resetForm();
        }
    })
    return (
        <>
            <section className="formSection">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 ">
                            <div className="card text-black">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="email">Your Email</label>
                                                        <input type="email" id="email" name="email" placeholder="Enter Your Email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className="form-control" />
                                                        {errors.email && touched.email ? <p className="error-label">{errors.email}</p> : null}
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                        <input type="password" id="password" name="password" placeholder="Enter a Password"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className="form-control" />
                                                        {errors.password && touched.password ? <p className="error-label">{errors.password}</p> : null}
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">

                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label">Don't have Account?<NavLink className="register-link" to='/'> Register</NavLink></label>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit} >Sign In</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src={myImg} className="img-fluid animated" alt="Sample" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp