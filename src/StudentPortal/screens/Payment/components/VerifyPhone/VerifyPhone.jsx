import React, { useState } from 'react'
import "./VerifyPhone.scss"
import VerifyPhoneImg from "../../../../assets/images/verifyPhone.png"
import Topbar from '../../../../components/Topbar/Topbar'

const VerifyPhone = () => {
    const [age, setAge] = useState();

const handleChange = (e) => {
  const value = e.target.value.replace(/\D/g, "");
  setAge(value);
};
    return (
        <>
            <Topbar />
            <div className="verify__phone">

                <div className="verify__phone_left"><img src={VerifyPhoneImg} /></div>
                <div className="verify__phone_right">
                    <div className="verify__phone_box">
                        <div className="verify__phone_heading">Verify Phone Number</div>
                        <div className="verify__phone_inputbox">
                            <div className="verify__phone_label">OTP Code</div>
                            <input value={age} onChange={handleChange} type="number" className="verify__phone_input" placeholder="6-Digit Code" />
                        </div>
                        <div className="verify__phone_btn">Continue</div>
                        <div className="verify__phone_bottom">
                            <div className="vpb__text">A 6-Digit OTP Has Been Sent To<span className="vpb__text_blue">+493090180</span></div>
                            <div className="vpb__text">Did Not Recieve OTP? <span className="vpb__text_blue">Resend</span></div>
                            <div className="vpb__text"><span className="vpb__text_blue">Call Me Instead</span></div>
                            <div className="vpb__text"><span className="vpb__text_blue">Edit Phone Number</span></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default VerifyPhone
