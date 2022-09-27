import React from 'react'
import myImg from '../Images/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg'
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
const FooterWeb = () => {
    return (
        <>
            <CDBFooter className="shadow">
                <CDBBox
                    display="flex"
                    justifyContent="between"
                    alignItems="center"
                    className="mx-auto py-4 flex-wrap"
                    style={{ width: '80%' }}
                >
                    <CDBBox display="flex" alignItems="center">
                        <img
                            alt="logo"
                            src={myImg}
                            width="100px"
                        />
                        <span className="ml-4 h5 mb-0 font-weight-bold">Devwares</span>

                        <small className="ml-2">&copy; Devwares, 2022. All rights reserved.</small>
                    </CDBBox>
                    <CDBBox display="flex">
                        <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="facebook-f" />
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="mx-3 p-2">
                            <CDBIcon fab icon="twitter" />
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="instagram" />
                        </CDBBtn>
                    </CDBBox>
                </CDBBox>
            </CDBFooter>
        </>
    )
}

export default FooterWeb