import React from 'react'
import "./PaymentModal.css"
import Passed from "../../../../assets/images/payment-passed.png"
import Failed from "../../../../assets/images/payment-failed.png"
import { ReactComponent as CloseModal } from "../../../../assets/icons/closeModal.svg"

const PaymentModal = ({ type, heading, desc, btnText, onClose, onBtnClick }) => {
    return (
        <div className="payment__modal_backdrop" onClick={onClose}>
            <div className="payment__modal_wrapper" onClick={(e) => e.stopPropagation()}>
                <CloseModal className="payment__modal_close" onClick={onClose} />
                <div className="payment__modal_box">
                    <img className="payment__modal_img" src={type === "passed" ? Passed : Failed} />
                    <div className="payment__modal_heading">{heading}</div>
                    <div className="payment__modal_desc">{desc}</div>
                    <div className="payment__modal_btn" onClick={onBtnClick}>{btnText}</div>
                </div>
            </div>
        </div>
    )
}

export default PaymentModal
