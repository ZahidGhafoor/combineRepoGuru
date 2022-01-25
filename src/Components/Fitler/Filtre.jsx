import React, { useState } from 'react'
import "./Filtre.scss"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ok from "../../Assets/ok2.svg"

import "react-datepicker/dist/react-datepicker.css";
import Account from '../Profile/Account/Account';








const Filtre = (props) => {
    const [open, setOpen] = useState(false);
    const [send, setSend] = useState("generate")


    const handleClickOpen = () => {      
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSend("generate")
    };
    return (
        <>
            <Account account={props.account} handleClickOpen={handleClickOpen} />
            <div className="filter__container">
                {/* <Button variant="outlined" onClick={handleClickOpen}>
                    Open alert dialog
                </Button> */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >

                    <DialogContent>
                        {
                            send == "generate" ?
                                <>
                                    <div className="userInfo__container">
                                        <div className="heading">
                                            Please enter the email id
                                        </div>
                                        <p className="para">
                                            Please enter the email id that user has used to create the account.
                                        </p>
                                        <div className="input1">
                                            <div className="input__heading">
                                                ENTER EMAIL HERE
                                            </div>
                                            <div className="inputfield">
                                                <input type="email" placeholder="Email Adress" className="input" />
                                                <img src={ok} alt="Error" className="input__img" />
                                            </div>
                                        </div>
                                        <div className="input1">
                                            <div className="input__heading">
                                                FIRST NAME
                                            </div>
                                            <div className="inputfield">
                                                <input type="text" placeholder="First Name" className="input" />
                                                <img src={ok} alt="Error" className="input__img" />
                                            </div>
                                        </div>
                                        <div className="input1">
                                            <div className="input__heading">
                                                LAST NAME
                                            </div>
                                            <div className="inputfield">
                                                <input type="text" placeholder="Last Name" className="input" />
                                                <img src={ok} alt="Error" className="input__img" />
                                            </div>
                                        </div>
                                        <div className="input1">
                                            <div className="input__heading">
                                                DATE OF BIRTH
                                            </div>
                                            <div className="inputfield">
                                                <input type="text" placeholder="16.01.1992" className="input" />
                                                <img src={ok} alt="Error" className="input__img" />
                                            </div>
                                        </div>
                                        <div className="input1">
                                            <div className="input__heading">
                                                PLACE OF BIRTH
                                            </div>
                                            <div className="inputfield">
                                                <input type="text" placeholder="Berlin" className="input" />
                                                <img src={ok} alt="Error" className="input__img" />
                                            </div>
                                        </div>
                                        <div className="input1">
                                            <div className="input__heading">
                                                SELECT A LANGUAGE OF THE LICENSE KEY
                                            </div>
                                            <div className="inputfield">
                                                <select name="cars" id="cars" className="input__select">
                                                    <option value="Urdu">Urdu</option>
                                                    <option value="English">English</option>
                                                    <option value="Arabic">Arabic</option>
                                                    <option value="French">French</option>
                                                    <option value="Turkish">Turkish</option>
                                                    <option value="RUSSIAN">RUSSIAN</option>
                                                    <option value="PUNJABI">PUNJABI</option>
                                                    <option value="POLISH">POLISH</option>
                                                    <option value="HINDI">HINDI</option>



                                                </select>
                                            </div>

                                        </div>

                                        <button onClick={() => { setSend("confirm") }} className="generate__btn">
                                            Generate & send License Key
                                        </button>

                                    </div>
                                </>

                                :
                                send == "confirm" ?
                                    <>
                                        <div className="confirm">
                                            <div className="header">
                                                Are you sure you want to Generate & send License Key
                                            </div>

                                            <div className="confirm__btnn">
                                                <button onClick={() => { setSend("generate") }} className="btnn1">No</button>
                                                <button onClick={() => { setSend("close") }} className="btnn2">Yes</button>
                                            </div>
                                        </div>
                                    </>
                                    :

                                    <>
                                        <div className="close">
                                            <div className="heading">
                                                Key and the receipt is succesfully sent to the Users email.
                                            </div>

                                            <div className="para">
                                                Please ask the user to check the email after 30 Minutes
                                            </div>

                                            <div onClick={handleClose} className="confirm__btnn">
                                                <button className="btnn2">Close</button>
                                            </div>
                                        </div>
                                    </>
                        }

                    </DialogContent>

                </Dialog>




            </div>






        </>
    )
}

export default Filtre
