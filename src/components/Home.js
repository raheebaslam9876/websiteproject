import React from 'react'
import myImg2 from '../Images/laptop (2).jpg'
import GetImg from './GetImg'
const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="column-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-3 pt-lg-0  order-2 order-lg-1 d-flex justify-content-center flex-column ">
                                    <h1>
                                        Let us take you into a <strong className="brand-name">deeper experience</strong> make a moment a lasting conveyable memory.
                                    </h1>
                                    <h2 className="my-3">
                                        Let us help build your Dreams
                                    </h2>
                                    <div className="mt-3">
                                        <button className="btn btn-outline-primary" style={{ borderRadius: 20 }}>
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-1 order-lg-2 header-img">
                                    <img src={myImg2} className="img-fluid-animated" alt="main img" />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column-10 mx-auto mt-5 pt-5 pt-lg-0  order-2 order-lg-1 d-flex justify-content-end flex-column">
                            <h1>
                                Let us take you into a <strong>deeper experience,</strong> make a moment a lasting conveyable memory.
                            </h1>
                            <h2 className="my-3">
                                Let us help build your Dreams
                            </h2>
                            <div className="mt-3">
                                <button className="btn btn-outline-primary" style={{ borderRadius: 20 }}>
                                    Get Started
                                </button>
                                <GetImg />
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home