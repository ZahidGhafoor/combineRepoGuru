import React, { useState, useEffect } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import BackArrow from "../../assets/icons/backarrow.svg"


import "./Payment.scss"
import PaymentCards from './components/PaymentCard/PaymentCards'
import MultipleSelector from './components/MultiSelector/MultiSelector'
import PaymentDetails from './components/PaymentDetails/PaymentDetails'
import PaymentForm from './components/PaymentForm/PaymentForm'
import PaymentModal from "./components/PaymentModal/PaymentModal"
import VerifyPhone from "./components/VerifyPhone/VerifyPhone"
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';
import 'react-languages-select/scss/react-languages-select.scss';


const Payment = () => {
    const [countryCode, setCountryCode] = useState();
    const [selected, setSelected] = useState('');
    const [classname, setClassname] = useState([]);
    const [payment, setPayment] = useState("failed")
    const [screen, setScreen] = useState("1")
    const [value, setValue] = useState()
    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <>
            {screen !== "2" ? <div className="payment__screen">
                {payment === "passed" && <PaymentModal type="passed" heading="Thankyou!" desc="your payment was successfull" btnText="Continue" onBtnClick={() => { }} onClose={() => setPayment("")} />}
                {payment === "failed" && <PaymentModal type="failed" heading="Payment Failed" desc="Sorry, your payment of $350 had failed. The payment was declined. please make sure to update 
                    your billing information and try again ?" btnText="Update Billing information" onBtnClick={() => { }} onClose={() => setPayment("")} />}
                <Topbar />

                <div className="payment__container">
                    <div className="payment__container_header">
                        <div className="payment__header_left">
                            <img src={BackArrow} />
                            <span>Back</span>
                        </div>
                        <div className="payment__header_right">
                            <span className="ph__right_top">STEP 02/03</span>
                            <span className="ph__right_bottom">Payment Info.</span>
                        </div>
                    </div>

                    <div className="payment__user_info">
                        <h2 className="payment__primary__heading">Phone Number</h2>
                        <div className="payment__phoneinfo_container">
                            <div className="payment__phoneinfo_containerleft">
                                <div className="payment__subheading">Country</div>
                                <CountryDropdown id="UNIQUE_ID" className='payment__phoneinfo_inputleft' preferredCountries={['gb', 'us']} value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>
                            </div>
                            <div className="payment__phoneinfo_containerright">
                                <div className="payment__subheading">Phone Number</div>
                                <PhoneInput
                                    country={'us'}
                                    value={value}
                                    onChange={phone => setValue(phone)}
                                    className='payment__phoneinfo_inputright'

                                />
                            </div>

                        </div>

                    </div>
                    <div className="payment__user_info">
                        <h2 className="payment__primary__heading">Choose Language</h2>
                        <div className="payment__langinfo_container">
                            <div className="payment__langinfo_containerleft">
                                <div className="payment__subheading">Exam Language</div>
                                <div className="payment__langinfo_desc">This is the language you will take your exam in. These are the only languages
                                    approved by the Federal ministry of  transport and digital infrastructure.</div>
                                <ReactLanguageSelect
                                    className="payment__language_selector"
                                    defaultLanguage="en" />
                            </div>
                            <div className="payment__langinfo_containerright">
                                <div className="payment__subheading">Study Language</div>
                                <div className="payment__langinfo_desc">This is your primary language. You will prepare theory exam in this language. This
                                    language will run alongside the language that
                                    you have chosen above.</div>
                                <ReactLanguageSelect
                                    className="payment__language_selector"
                                    defaultLanguage="en"
                                />
                            </div>

                        </div>

                    </div>
                    <div className="choose__class">
                        <h2 className="payment__primary__heading"> Choose Class</h2>
                        <div className="choose__class_box">
                            <div className="payment__subheading">Exam Language</div>

                            <ul className="class_instructions">
                                <li>You Can Choose Multiple Classes</li>
                                <li>The Basic Knowledge is Default For Everyone</li>
                            </ul>
                        </div>
                        <div className="choose__class_inputbox">
                            <label className="payment__subheading" >Class</label>
                            <MultipleSelector classname={classname} setClassname={setClassname} />
                        </div>
                    </div>



                    <PaymentCards />
                    
                    <div className="payment__bottom_container">
                        <div className="payment__bottom_left">
                            <PaymentForm />
                        </div>
                        <div className="payment__bottom_right"><PaymentDetails /></div>
                    </div>

                </div>
            </div> : <VerifyPhone />}</>
    )
}



export default Payment
