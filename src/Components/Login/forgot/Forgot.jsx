import React, { useState } from 'react'
import "./Forgot.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// API
import { forgotPassStart } from '../../../Api/auth'

// icons
import logo from "../../../Assets/logo.png"
import mail from "../../../Assets/mail.png"
import lock from "../../../Assets/lock.png"
import check from "../../../Assets/Check.png"
import signal from "../../../Assets/signal.png"

// mui
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory } from 'react-router-dom';

const Forgot = () => {
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

    const Forgot = async () => {
        setLoading(true)
        const res = await forgotPassStart(forgotPass)
        if (res.error != null) {
            console.log("Error is =========", res.error)
            toast.error('Something went wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setLoading(false)
        }
        else {
            console.log(res.data)
            setLoading(false)
            toast.success('Forgot Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }
    }

    return (
        <>
            <div className="forgot__container">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />


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



                    <div onClick={Forgot} className="footer__right__btnn2">{loading == true ? <CircularProgress className="loading" /> : "Send Reset Instructions"}</div>




















                    <div className="right__copyright">
                        Copyright 2021 Gurubook Germany All Rights Reserved
                    </div>

                </div>



            </div>


        </>
    )
}

export default Forgot
