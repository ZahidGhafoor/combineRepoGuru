import React from 'react'

import logo from "../../../Assets/logo.png"
import "./Invoice.scss"

const Invoice = () => {
    return (
        <>
            <div class="invoice__container">
                <div class="header">
                    <div class="header__left">
                        <p class="left__para1 bold">Mr. Joe Baiden</p>
                        <p class="left__para1">Am Hirtengraben 3</p>
                        <p class="left__para1">65779 Kelkheim</p>
                    </div>
                    <div class="header__logo">
                        <img src={logo} alt="" />
                    </div>
                    <div class="header__right">
                        <p class="right__para1  bold">SOOD & SONS GMBH</p>
                        <p class="right__para1">Kurfurstenplatz 34</p>
                        <p class="right__para1">60486 Frankfurt am Mian</p>
                        <p class="right__para1 second">Ust:CE212344234</p>


                        <p class="right__para1">info@gurubook.de</p>
                        <p class="right__para1">www.gurubook.de</p>
                        <p class="right__para1">+49 069 770 69 770</p>


                    </div>
                </div>

                <div class="header__bottom">
                    <div class="bottom__left">Invoice</div>
                    <div class="bottom__right">
                        <div class="right__upper">
                            <p class="upper__para1">INVOICE DATE</p>
                            <p class="upper__para12">January 1, 2020</p>
                        </div>
                        <div class="right__upper">
                            <p class="upper__para1">INVOICE NUMBER</p>
                            <p class="upper__para12">OS012021-0001</p>
                        </div>
                    </div>
                </div>

                <div class="body">
                    <div class="body__table">
                        <p class="table__para1">DESCRIPTION</p>
                        <p class="table__para1">UNIT PRICE</p>
                        <p class="table__para1">QUANTITY</p>
                        <p class="table__para1">YAT</p>
                        <p class="table__para1">AMOUNT</p>
                    </div>
                    <div class="body__table2">
                        <p class="table__para1">GURUBOOK APP - PUNJABI</p>
                        <p class="table__para1">€ 500.00</p>
                        <p class="table__para1">01</p>
                        <p class="table__para1">€ 79.83</p>
                        <p class="table__para1">€ 420.17 </p>
                    </div>
                    <div class="body__table2">
                        <p class="table__para1">PAYMENT TRANSACTION CHARGES</p>
                        <p class="table__para1">€ 14.00</p>
                        <p class="table__para1">01</p>
                        <p class="table__para1">€ 9.83</p>
                        <p class="table__para1">€ 11.17 </p>
                    </div>
                    <div class="body__table3">
                        <p class="table__para1"></p>
                        <p class="table__para1"></p>
                        <p class="table__para2">SUBTOTAL</p>
                        <p class="table__para1"></p>
                        <p class="table__para1">€ 432.01 </p>
                    </div>
                    <div class="border">
                        <div class="border__bottom"></div>
                    </div>
                    <div class="body__table3">
                        <p class="table__para1"></p>
                        <p class="table__para1"></p>
                        <p class="table__para2">VAT@ 19%</p>
                        <p class="table__para1"></p>
                        <p class="table__para1">€ 32.01 </p>
                    </div>
                    <div class="border">
                        <div class="border__bottom"></div>
                    </div>
                    <div class="body__table3">
                        <p class="table__para1"></p>
                        <p class="table__para1"></p>
                        <p class="table__para1">TOTAL</p>
                        <p class="table__para1"></p>
                        <p class="table__para2">€ 514,09 </p>
                    </div>


                    <div class="table__bottom">
                        <div class="table__bottom__paras">
                            <p class="table__bottom__para1">BANK ACCOUNT DETAILS</p>
                            <p class="table__bottom__para3">Transfer the amount to the business account below. Please include invoice number on your online transfers</p>
                            <p class="table__bottom__para3"><strong>BANK: </strong> COMERZBANK</p>
                            <p class="table__bottom__para3"><strong>IBAN: </strong> DE82-2343-2332-2323-5678-00</p>
                        </div>
                    </div>

                </div>
                <div class="footer">
                    <div class="footer__upper">
                        <div class="footer__heading">NOTES</div>
                        <p class="upper__footer__para">
                            You have a 14 days period to cancel the application. Please write to cancelation@gurubook.de with in 14 days for a refund.
                        </p>
                        <p class="upper__footer__para">
                            Your money will be refunded to the same account that you used by the time of registration with in 4 weeks.
                        </p>
                        <p class="upper__footer__para">
                            Thank you for choosing Gurubook App.
                        </p>
                    </div>
                    <div class="team">GURUBOOK TEAM</div>

                    <div class="footer__bottom">
                        <div class="bottom__div1">
                            <p class="div__para1">SOOD & SONS GMBH</p>
                            <p class="div__para1">Kurfürstenplatz 34</p>
                            <p class="div__para1">60486 Frankfurt am Main.</p>
                        </div>
                        <div class="bottom__div1">
                            <p class="div__para1">www.gurubook.de</p>
                            <p class="div__para1">info@gurubook.de</p>
                            <p class="div__para1">+49 069 770 69770</p>
                        </div>
                        <div class="bottom__div1">
                            <p class="div__para1">Geschaftsführer: George Sood</p>
                            <p class="div__para1">Ust Nr.: DE 8723 4563 33</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Invoice
