import React, { useEffect, useState } from 'react'
import "./Notify.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header'

// API's
import { getNotify, sendNotify, deleteNotify } from "../../Api/notification"

// icons & imgs
import undo from "../../Assets/undo.png"
import redo from "../../Assets/redo.png"
import link from "../../Assets/link.png"
import light from "../../Assets/light.png"
import pinkIcon from "../../Assets/pinkIcon.png"
import time from "../../Assets/time.png"
import send from "../../Assets/send.png"
import restore from "../../Assets/restore.png"

// mui
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';


const type = [
    { label: "CRITICAL" },
    { label: "INFO" },
    { label: "WARNING " },
];
const language = [
    { label: "URDU" },
    { label: "ENGLISH" },
    { label: "ARABIC" },
    { label: "FRENCH" },
    { label: "GERMEN" },
    { label: "HINDI" },
    { label: "ITALIAN" },
    { label: "RUSSIAN" },
];

const Notify = () => {
    const [bold, setBold] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [dataLod, setDataLod] = useState(false)
    const [val, setVal] = useState({
        msg: "",
        type: "",
        language: ""
    });
    const [error, setError] = useState(false)

    const InputEvent = (event, data) => {
        const { value, name } = event.target;
        setVal((pValue) => {
            return {
                ...pValue,
                [name]: value,
            }
        })
    }
    const InputAuto = (name, data) => {
        // console.log("AUTO COMPLETE ================ ", name, data?.label)
        setVal((pValue) => {
            return {
                ...pValue,
                [name]: data?.label,
            }
        })
    }

    const postNotification = async () => {
        setLoading(true)
        const res = await sendNotify(val)
        if (res.error != null) {
            console.log("notify error ========", res.error)
            toast.error('Something went wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setLoading(false)

        }
        else {
            console.log(res.data)
            setLoading(false)
            toast.success('Notification Sent Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setError(!error)
        }
        console.log(res)

    }

    console.log(val)

    useEffect(async () => {
        setDataLod(true)
        let res = await getNotify()

        if (res.error != null) {

            console.log("Something went wrong")
        }
        else {
            setDataLod(false)
            setData(res.data.items.reverse())

        }




        console.log("getNotify======================", res.data)
    }, [error])


    const del = async (val) => {
        let res = await deleteNotify(val)


        if (res.error != null) {
            console.log("notify error ========", res.error)
            toast.error('Something went wrong', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            console.log(res.data)
            toast.success('Notification Deleted Successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setError(!error)
        }
        console.log(res)
        setError(!error)
    }

    const get_time_diff = (datetime) => {
        var datetime = typeof datetime !== 'undefined' ? datetime : "2014-01-01 01:02:03.123456";

        var datetime = new Date(datetime).getTime();
        var now = new Date().getTime();

        if (isNaN(datetime)) {
            return "";
        }

        // console.log(datetime + " " + now);

        if (datetime < now) {
            var milisec_diff = now - datetime;
        } else {
            var milisec_diff = datetime - now;
        }

        var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

        var date_diff = new Date(milisec_diff);

        if (days <= 0) {
            return date_diff.getHours() + " Hours " + date_diff.getMinutes() + " Minutes ";
        } else if (date_diff.getHours <= 0) {
            return date_diff.getMinutes() + " Minutes ";
        } else {
            return days + " Days " + date_diff.getHours() + " Hours " + date_diff.getMinutes() + " Minutes ";
        }

    }
    return (
        <>
            <div className="header__component">
                <Header />
            </div>

            <div className="nf__container">
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
                <div className="nf__header">
                    <div className="nf__heading">To</div>
                    <div className="header__body">
                        <div className="body__upper">
                            <input type="text" className="upper__input" placeholder="Type a message" value={val.msg}
                                onChange={InputEvent}
                                name="msg" style={{ fontWeight: bold ? "bold" : "normal" }} />
                        </div>
                        <div className="body__bottom">
                            <div className="bottom__left">
                                <img src={undo} alt="" className="left__img1 cursor" />
                                <img src={redo} alt="" className="left__img1 cursor" />
                                <div className="left__bold cursor" style={{ fontWeight: bold ? "bold" : "normal" }} onClick={() => { setBold(!bold) }}>B</div>
                                <img src={link} alt="" className="left__img1 cursor" />
                            </div>
                            <div className="bottom__right">
                                <div className="right__accor">
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        value={val.language}
                                        onChange={(e, v) => InputAuto("language", v)}
                                        name="language"
                                        options={language}
                                        sx={{ width: '230px' }}
                                        renderInput={(params) => <TextField {...params} placeholder="Select a language" />}
                                    />
                                </div>


                                <div className="right__accor">
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        value={val.type}
                                        onChange={(e, v) => InputAuto("type", v)}
                                        name="type"
                                        options={type}
                                        sx={{ width: '230px' }}
                                        renderInput={(params) => <TextField {...params} placeholder="Select Notification Type" />}
                                    />
                                </div>
                                <div onClick={postNotification} className="right__btn cursor">

                                    {
                                        loading == true ? <CircularProgress className="loading" /> :
                                            <>
                                                <img className="btn__icon" src={send} alt="" />
                                                <div className="btn__para">SEND</div>
                                            </>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {dataLod == true ? <div className="loading"><CircularProgress /></div> :
                    <div className="notify__body">
                        <p className="body__heading">Previous Notifications</p>
                        {
                            data.map((val) => {
                                console.log("val==========", val.id)
                                return (

                                    <div className="notify__body1">
                                        <div className="notify__body1__left">
                                            {
                                                val.type == "CRITICAL" ?
                                                    <img src={light} alt="" className="left__icon" /> :
                                                    val.type == "INFO" ?
                                                        <img src={time} alt="" className="left__icon" /> :
                                                        <img src={pinkIcon} alt="" className="left__icon" />

                                            }
                                            <div className="left__paras">
                                                <div className="left__upper__para">
                                                    {val.message}
                                                </div>
                                                <div className="left__bottom__para">
                                                    {get_time_diff(val.createdOn)} ago By {val.createdBy}
                                                </div>
                                            </div>

                                        </div>
                                        <div onClick={() => { del(val.id) }} className="notify__body1__right cursor">
                                            <img src={restore} alt="" className="right__icon" />
                                            <div className="right__para">RETRACT NOTIFICATION</div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                }
            </div>
        </>
    )
}

export default Notify





