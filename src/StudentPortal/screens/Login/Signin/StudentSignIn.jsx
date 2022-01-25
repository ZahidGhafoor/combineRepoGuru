import React, { useState } from 'react'
import { useHistory } from 'react-router';
import "./StudentSignIn.scss"
import 'react-toastify/dist/ReactToastify.css';


// icons
import logo from "../../../../Assets/logo.png"
import mail from "../../../../Assets/mail.png"
import lock from "../../../../Assets/lock.png"
import check from "../../../assets/icons/Check2.svg"
import signal from "../../../assets/images/signal.png"


// mui
import CircularProgress from '@mui/material/CircularProgress';






const StudentSignIn = () => {

    const [loading, setLoading] = useState(false)

    let history = useHistory()






    const [val, setVal] = useState({
        name: "",
        pass: "",
    })

    const [error, setError] = useState("Invalid Email")

    const InputEvent = (event) => {
        const { value, name } = event.target;

        switch (name) {
            case "name":
                setVal((pValue) => {
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
                break;
            default:
                setVal((pValue) => {
                    return {
                        ...pValue,
                        [name]: value,
                    }
                })
                break;
        }




    }


    console.log("forgot ==================", val)



    const adminforgot = () => {
        history.push("/student/forgot-password")

    }

    const [success, setSuccess] = useState(false)
    return (
        <>
            <div className="ssi__container">

                <div className="si__img">
                    <img className="si__left__img" src={signal} alt="" />
                </div>

                <div className="si__right">
                    <div className="right__header__logo">
                        <img src={logo} alt="" />
                    </div>

                    {
                        success == true ?
                            <>
                                <div className="right__heading">
                                    <p className="heading__para1">Welcome Back!</p>
                                    <p className="heading__para2">Please Login to Your Account to Continue</p>
                                </div>

                                <div className="right__input">
                                    <div className="input__heading">Email Address</div>
                                    <div className="input__data">
                                        <div className="input">
                                            <div>
                                                <img className="input__logo" src={mail} alt="Error" />
                                            </div>
                                        </div>
                                        <input autoComplete='false' className="input__entry" type="email" placeholder="Enter Your Email" onChange={InputEvent} value={val.name} name="name" />
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


                                <div className="right__input">
                                    <div className="input__heading">Password</div>
                                    <div className="input__data">
                                        <div className="input">
                                            <div>
                                                <img className="input__logo" src={lock} alt="Error" />
                                            </div>
                                        </div>
                                        <input className="input__entry" type="password" placeholder="Enter your password" onChange={InputEvent} value={val.pass} name="pass" />
                                    </div>

                                </div>





                                <div className="right__forgot__para">
                                    <div className="remember">
                                        <input type="radio" className='checked' />
                                        <p className="forgot__para1 cursor">Remember Me</p>
                                    </div>

                                    <p onClick={adminforgot} className="forgot__para2 cursor">Forgot Password?</p>
                                </div>

                                <div className="right__btn1 cursor">Sign Up</div>
                                <div className="right__btnn2 cursor">{loading == true ? <CircularProgress className="loading" /> : "Login"}</div>
                            </> :

                            <>
                                <div className="sucs__container">
                                    <p className="suc__para1">Hi Mr. Beiden,</p>
                                    <p className="suc__para2">Welcome To Gurubook!</p>
                                    <p className="suc__para2">We're Excited To Have You Get Started. Your GuruBook Account is Successfully Created.</p>
                                    <p className="suc__para3">Please Press The Button To Start Learning.</p>

                                    <div onClick={() => setSuccess(true)} className="sucs__btnn cursor">Login To My Account</div>



                                </div>
                            </>



                    }












                    
                            <div className="right__copyright">
                                Copyright 2021 Gurubook Germany All Rights Reserved
                            </div>



                </div>
            </div>
        </>
    )
}

export default StudentSignIn
