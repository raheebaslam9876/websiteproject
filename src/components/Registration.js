import React from 'react'

const Registration = () => {
    return (
        <>
            <div className="Reg-form-container">
                <form className="Reg-form">
                    <div className="Reg-form-content">
                        <h3 className="Reg-title">Registration</h3>
                        <div className="form-group mt-3">
                            <label>Email Address</label>
                            <input
                                type="text"
                                placeholder='Enter email'
                                className="form-control mt-1"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email Address</label>
                            <input
                                type="text"
                                placeholder='Enter email'
                                className="form-control mt-1"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Registration