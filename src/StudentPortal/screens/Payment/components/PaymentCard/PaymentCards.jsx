import React from 'react'
import "./PaymentCards.css"
import Paypal from "../../../../assets/images/paypal.png"
import Paycash from "../../../../assets/images/paycash.png"
import Sofort from "../../../../assets/images/sofort.png"
import Visa from "../../../../assets/images/visa.png"

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const PaymentCards = () => {
    return (
        <>
            <div className="payment__cards">
                <span className="payment__card"> <img className='card__imgs' src={Paypal} /></span>
                <span className="payment__card"><img className='card__img' src={Paycash} /></span>
                <span className="payment__card"> <img className='card__img' src={Sofort} /></span>
                <span className="payment__card"><img className='card__imgs' src={Visa} /></span>

            </div>
        </>
    )
}

export default PaymentCards
