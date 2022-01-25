import React, { useState } from 'react'
import "./AdminForgot.scss"
import 'react-toastify/dist/ReactToastify.css';

// API


// icons
import logo from "../../../../Assets/logo.png"
import mail from "../../../../Assets/mail.png"
import check from "../../../../Assets/Check.png"
import signal from "../../../../Assets/signal.png"

// mui
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory } from 'react-router-dom';

const AdminForgot = () => {
    const [loading, setLoading] = useState(false)
    const [forgotPass, setForgotPass] = useState({
        forgotEmail: ""
    })
    const [error, setError] = useState("Invalid Email")

    let history = useHistory()

    const ForgotInputEvent = (event) => {
        const { value, name } = event.target;

        setForgotPass((pValue) => {
            return {
                ...pValue,
                [name]: value,
            }
        })

        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
            setError(null)
        } else {
            setError("Invalid Email")
        }

    }



    return (
        <>
            <div className="forgot__container">


                <div className="si__img">
                    <img className="si__left__img" src={signal} alt="" />
                </div>



                <div className="si__right">
                    <div className="right__header__logo">
                        <img src={logo} alt="" />
                    </div>




                    <div className="right__heading">
                        <p className="footer__heading__para1">Forgot your password?</p>
                        <p className="footer__heading__para2">Don't worry, we got you</p>
                        <p className="footer__heading__para3">Please enter your email address associated to your account</p>
                    </div>

                    <div className="right__input">
                        <div className="input__heading">Email Address</div>


                        <div className="input__data">
                            <div className="input">
                                <div>
                                    <img className="input__logo" src={mail} alt="Error" />
                                </div>
                            </div>
                            <input autoComplete='off' className="input__entry" type="email" placeholder="Enter Your Email" onChange={ForgotInputEvent} value={forgotPass.forgotEmail} name="forgotEmail" />
                            {
                                error == null ?
                                    <div className="check" ><img className="input__check" src={check} alt="" /></div>
                                    :
                                    null
                            }
                            {
                                error != null ?
                                    <div className='valid'>Please enter valid email</div> : null

                            }

                        </div>





                    </div>



                    <div className="footer__right__btnn2">{loading == true ? <CircularProgress className="loading" /> : "Send Reset Instructions"}</div>




















                    <div className="right__copyright">
                        Copyright 2021 Gurubook Germany All Rights Reserved
                    </div>

                </div>



            </div>


        </>
    )
}

export default AdminForgot
