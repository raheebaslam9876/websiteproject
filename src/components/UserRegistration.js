import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '../schemas/SignUpSchema'
import myImg from '../Images/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg'
const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: ""
}
const UserRegistration = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        },
    })
    console.log(errors)

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

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                                                <div className="d-flex flex-row align-items-center mb-4 mt-3">

                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">

                                                        <label className="form-label" htmlFor="name">Your Name</label>
                                                        <input type="text" id="name" name="name"
                                                            value={values.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className="form-control" />
                                                        {errors.name && touched.name ? <p className="error-label">{errors.name}</p> : null}

                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">

                                                        <label className="form-label" htmlFor="email">Your Email</label>
                                                        <input type="email" id="email" name="email"
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
                                                        <input type="password" id="password" name="password"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className="form-control" />
                                                        {errors.password && touched.password ? <p className="error-label">{errors.password}</p> : null}
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="confirm_password">Confirm password</label>
                                                        <input type="password" id="confirm_password"
                                                            value={values.confirm_password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="confirm_password" className="form-control" />
                                                        {errors.confirm_password && touched.confirm_password ? <p className="error-label">{errors.confirm_password}</p> : null}
                                                    </div>
                                                </div>



                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src={myImg}
                                                className="img-fluid" alt="Sample image" />

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

export default UserRegistration