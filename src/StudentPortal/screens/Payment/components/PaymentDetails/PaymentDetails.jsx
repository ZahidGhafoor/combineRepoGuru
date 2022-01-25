import React from 'react'
import "./PaymentDetails.css"
import { ReactComponent as Lock1 } from "../../../../assets/icons/lock1.svg"

const PaymentDetails = () => {
    return (
        <div className="payment__details">
            <div className="payment__details_heading">About what you are paying for</div>
            <div className="payment__details_desc">You will be charged for buying a Gurubook License Key
                that gives you an access to the online learning framework. It also involves a transaction fee for the online payments & a Value added tax.</div>
            <hr className="payment__details_underline" />
            <div className="payment__details_list">
                <div className="payment__details_listitem">
                    <div className="pd__listitem_left">
                        <div className="pdl__top">Gurubook License Key</div>
                        <div className="pdl__bottom">(Punjabi)</div>
                    </div>
                    <div className="pd__listitem_right">€100.00</div>
                </div>
                <div className="payment__details_listitem">
                    <div className="pd__listitem_left">
                        <div className="pdl__top">Transaction fee </div>
                        <div className="pdl__bottom">(Stripe transaction fee 2.9% + €0.30)</div>
                    </div>
                    <div className="pd__listitem_right">€100.00</div>
                </div>
                <div className="payment__details_listitem">
                    <div className="pd__listitem_left">
                        Value Added Tax (19%)
                    </div>
                    <div className="pd__listitem_right">€100.00</div>
                </div>
                <div className="payment__details_listitemb">
                    <div className="pd__listitem_left">Total</div>
                    <div className="pd__listitem_right">€300.00</div>
                </div>
                <div className="payment__details_bottom">
                    <div className="payment__details_btn"><Lock1 className="payment__details_lock" /> <span>Pay & Continue</span></div>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails
