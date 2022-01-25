import React from 'react'
import "./PaymentForm.scss"

import paypal from "../../../../assets/icons/paypal.svg"
import sofort from "../../../../assets/icons/sofort.svg"
import CountryDropdown from 'country-dropdown-with-flags-for-react';


import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const PaymentForm = () => {
    return (
        <div className="payment__form_wrapper">
            {/* <div className='visa__payment__form'>
            <div className="payment__form_item p_90">
                <div className="payment__form_label inp1 " >Email</div>
                <input type="email" placeholder="Email Address" className="payment__form_input" />
            </div>
            <div>
            <div className="payment__form_item p_55">
                <div className="payment__form_label inp2 " >Card Holder Name</div>
                <input type="email" placeholder="George Sood" className="payment__form_input" />
            </div>
            <div className="payment__form_item p_45">
                <div className="payment__form_label inp3 " >Country Or Region</div>
                <CountryDropdown id="UNIQUE_ID" className='payment__phoneinfo_inputleft' preferredCountries={['gb', 'us']} value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>
                
            </div>
            </div>
            <div className="payment__form_item p_65">
                <div className="payment__form_label inp4 " >Card Number</div>
                <input type="email" placeholder="1234 1234 1234 1234" className="payment__form_input" />
            </div>
            <div className="payment__form_item p_35">
                <div className="payment__form_label inp5" >Expiry Date</div>
                <input type="email" placeholder="MM/YY" className="payment__form_input" />
            </div>
            <div className="payment__form_item p_50">
                <div className="payment__form_label inp6" >CVV</div>
                <input type="text" placeholder="CVV" className="payment__form_input" />
            </div>
            <div className="payment__form_item p_40">
                <div className="payment__form_label inp7" >Zip Code</div>
                <input type="email" placeholder="Zip Code" className="payment__form_input" />
            </div>
            </div> */}



            {/* <div className="paypal__payment">
                <img src={paypal} alt="" className="icon" />
                <div className="payment__form_itemm p_100">
                    <div className="payment__form_labell" >Email</div>
                    <input type="email" placeholder="Email Address" className="paypal__form_inputt" />
                </div>
                <div className="payment__form_itemm p_100">
                    <div className="payment__form_labell" >Password</div>
                    <input type="password" placeholder="Password" className="paypal__form_inputt" />
                </div>
                <div className="check1">
                                <div className='checkbox'>
                                    <Checkbox
                                        color="success"
                                        // {...label}
                                        icon={<CheckCircleIcon />}
                                        checkedIcon={<CheckCircleIcon />}
                                    />

                                </div>
                                <div className="line">
                                    Stay Logged in for faster checkout <br /> <p className="check__para">
                                        Not recommended on shared devices
                                    </p>
                                </div>
                            </div>

            </div> */}



            <div className="sofort__payment">
            <img src={sofort} alt="" className="icon" />
            <div className="payment__form_item p_90">
                    <div className="payment__form_label " >User ID</div>
                    <input type="number" placeholder="Password" className="payment__form_input" />
                </div>
                <div className="payment__form_item p_90">
                    <div className="payment__form_label " >Password</div>
                    <input type="password" placeholder="Password" className="payment__form_input" />
                </div>
                <div className="transact">
                    <div className="heading">
                        Transaction confirmation
                    </div>
                    <div className="para">
                        Please enter the OTP we have jsut sent to your mobile phone via SMS.
                    </div>
                </div>
                <div className="payment__form_item p_90">
                    <input type="password" placeholder="Password" className="payment__form_input" />
                </div>
                
            </div>

            {/* <div className="lecense__payment">
            <div className="hheading">Enter a License Key Please</div>
            <div className="email__block">
                <div className="upper">
                    <div className="heading">Email</div>
                    <input type="email" className="upper__email" />
                </div>
                <hr className="email__hr" />
                <div className="bottom">
                    <div className="heading">License Key</div>
                    <input type="text" className="upper__email" />
                </div>

            </div>


            <div className="hheading">Buying Method</div>
            <div className="buy__block">
               <div className="buy__header">
                   <div className="left">Gurubook Offline Store</div>
                   <div className="right">$10.00</div>
               </div>
               <div className="para">Sold by admin ID: AD-123456. Choose this method to pay and your license key is Valid for another 180 Days.</div>

            </div>

            </div> */}

        </div>
    )
}

export default PaymentForm
