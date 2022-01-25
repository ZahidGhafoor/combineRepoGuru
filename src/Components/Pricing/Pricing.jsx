import React, { useEffect, useState } from 'react'
import './Pricing.scss'
import Header from '../Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// API's
import { getPricing, updatePricing } from '../../Api/pricing'

// icons
import print from "../../Assets/print.png"

// mui
import { CircularProgress } from '@mui/material'


const Pricing = () => {
    const [getPrice, setGetPrice] = useState()
    const [val, setVal] = useState()
    const [reload, setReload] = useState(false)

    const updateInput = (event) => {
        const { value, name } = event.target;

        setVal((preVal) => {
            return {
                ...preVal,
                [name]: parseFloat(value)
            }

        })

    }
    console.log("Updated value of inputs=======", val)

    useEffect(async () => {
        let res = await getPricing()
        if (res.error != null) {
            console.log("Error =====", res.error)
        }
        else {
            setGetPrice(res.data)
            setVal(res.data)


        }
    }, [reload])

    console.log("res.data ===========", getPrice)


    const Updated = async () => {
        const res = await updatePricing(val)
        if (res.error != null) {

            toast.error(res.error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setReload(reload ? false : true)
        }
        else {
            console.log("res ==========", res.data)
            toast.success('Value Updated Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setReload(reload ? false : true)

        }

    }
    console.log("updated val==========", val)







    const [edit, setEdit] = useState(false)
    const [approve, setApprove] = useState(false)
    const [tax, setTax] = useState(false)
    const [charge, setCharge] = useState(false)
    return (
        <>
            <div className="header__component">
                <Header />
            </div>
            {
                val == null ?
                    <div className="price__loading">
                        <CircularProgress />
                    </div>
                    :
                    <div className="pr__container">
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
                        <div className="pr__header">
                            <div className="pr__heading">Pricing</div>
                        </div>

                        <div className="pr__body">
                            <div className="pr__body1">
                                <div className="body1__heading">BMVI Languages</div>
                                <div className="body1__data">
                                    <div style={{ backgroundColor: edit == true ? " rgba(250, 250, 250, 1)" : null }} className="data__input">
                                        {edit == false ?
                                            <>
                                                <div className="input__euro">€</div>
                                                <input type="number" className="body1__input" value={val.bmviLanguage} />
                                                <div onClick={() => { setEdit(true) }} className="input__edit">Edit</div>

                                            </>
                                            :
                                            <>
                                                <div className="input__euro">€</div>
                                                <input type="number" className="body1__input__edit" name="bmviLanguage" value={val.bmviLanguage} onChange={updateInput} />
                                            </>}
                                    </div>
                                    {edit == true ?
                                        <div onClick={() => { setEdit(false) }} className="data__btn cursor">
                                            <img className="btn__icon" src={print} alt="Error" />
                                            <div onClick={Updated} className="btn__data">SAVE & UPDATE</div>
                                        </div>
                                        : null}
                                </div>
                            </div>



                            <div className="pr__body1">
                                <div className="body1__heading">Non-Approved Languages</div>
                                <div className="body1__data">
                                    <div style={{ backgroundColor: approve == true ? " rgba(250, 250, 250, 1)" : null }} className="data__input">
                                        {approve == false ?
                                            <>
                                                <div className="input__euro">€</div>
                                                <input type="number" className="body1__input" value={val.nonApprovedLanguage} />
                                                <div onClick={() => { setApprove(true) }} className="input__edit">Edit</div>

                                            </>
                                            :
                                            <>
                                                <div className="input__euro">€</div>
                                                <input type="number" className="body1__input__edit"
                                                    name="nonApprovedLanguage" value={val.nonApprovedLanguage} onChange={updateInput}
                                                />
                                            </>}
                                    </div>
                                    {approve == true ?
                                        <div onClick={() => { setApprove(false) }} className="data__btn cursor">
                                            <img className="btn__icon" src={print} alt="Error" />
                                            <div onClick={Updated} className="btn__data">SAVE & UPDATE</div>
                                        </div>
                                        : null}
                                </div>
                            </div>
                            <div className="pr__body1">
                                <div className="body1__heading">VAT (Tax Percentage)</div>
                                <div className="body1__data">
                                    <div style={{ backgroundColor: tax == true ? " rgba(250, 250, 250, 1)" : null }} className="data__input percent__input">
                                        {tax == false ?
                                            <>
                                                <div className="input__euro">%</div>
                                                <input type="number" className="body1__input" value={val.vatTaxPercentage} />
                                                {/* <div className="input__euro2">%</div> */}

                                                <div onClick={() => { setTax(true) }} className="input__edit">Edit</div>

                                            </>
                                            :
                                            <>
                                                <div className="input__euro">%</div>
                                                <input type="number" className="body1__input__edit"
                                                    name="vatTaxPercentage" value={val.vatTaxPercentage} onChange={updateInput} />
                                            </>}
                                    </div>
                                    {tax == true ?
                                        <div onClick={() => { setTax(false) }} className="data__btn cursor">
                                            <img className="btn__icon" src={print} alt="Error" />
                                            <div onClick={Updated} className="btn__data">SAVE & UPDATE</div>
                                        </div>
                                        : null}
                                </div>
                            </div>


                            <div className="pr__body1">
                                <div className="body1__heading">Online Payment Gatewat Charge</div>
                                <div className="body1__data">
                                    <div style={{ backgroundColor: charge == true ? " rgba(250, 250, 250, 1)" : null }} className="data__input">
                                        {charge == false ?
                                            <>
                                                <div className="input__euro">€</div>
                                                <input type="number" className="body1__input" value={val.paymentGateWayCharge} />
                                                <div onClick={() => { setCharge(true) }} className="input__edit">Edit</div>

                                            </>
                                            :
                                            <>
                                                <div className="input__euro">€</div>
                                                <input type="number" className="body1__input__edit"
                                                    name="paymentGateWayCharge" value={val.paymentGateWayCharge} onChange={updateInput} />
                                            </>}
                                    </div>
                                    {charge == true ?
                                        <div onClick={() => { setCharge(false) }} className="data__btn cursor">
                                            <img className="btn__icon" src={print} alt="Error" />
                                            <div onClick={Updated} className="btn__data">SAVE & UPDATE</div>
                                        </div>
                                        : null}
                                </div>
                            </div>




                        </div>

                    </div>}
        </>
    )
}

export default Pricing
