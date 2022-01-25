import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import "./popup.scss"

// Icons
import logo from "../../Assets/logo.png"
import Group from "../../Assets/Group.png"

// import logo from "../../"

// MUI
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';



const PopUp = () => {

    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [val, setVal] = useState({
        salutation: "",
        title: "",
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        postCode: "",
        streetNumber: "",
        city: "",
        password: "",
        iban: "",
        drivingSchoolName: "",
        accountHolderFirstName: "",
        accountHolderLastName: "",
        street: "",
        cpassword: "",

        "accountType": "ADMIN",
        "agreeLoginPolicy": true,
        "agreedRecommendation": true,
        "agreedTermsAndConditions": true,
        "isReturning": true,
        "phoneNumber": "string",
        "roles": [
            "ROLE_ADMIN"
        ],

    })

    console.log("DOB===========", val.dob)


    const InputEvent = (event, data) => {
        const { value, name } = event.target;


        setVal((pValue) => {
            return {
                ...pValue,
                [name]: value,
            }
        })




        // ---------------
        if (!val.salutation || !val.title || !val.firstName || !val.lastName || !val.dob || !val.email || !val.postCode || !val.streetNumber || !val.city || !val.password || !val.iban || !val.drivingSchoolName || !val.accountHolderFirstName || !val.accountHolderLastName || !val.street) {
            setShow(false)
        } else {
            setShow(true)
        }
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

    console.log(val)


    const [cvalues, setcValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setVal({ ...val, [prop]: event.target.value });
    };
    const handleChange2 = (prop) => (event) => {
        setcValues({ ...cvalues, [prop]: event.target.value });
        if (val.password == event.target.value) {

        }
    };

    const handleClickShowPassword = () => {
        setVal({
            ...val,
            showPassword: !val.showPassword,
        });
    };
    const handleClickShowPassword2 = () => {
        setcValues({
            ...cvalues,
            showPassword: !cvalues.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };
    const salutation = [
        { label: "Mr." },
        { label: "Ms" },
    ];
    const title = [
        { label: "Dr." },
        { label: "Prof." },
    ];
    const street = [
        { label: "Am Hirtengraben 3" },
        { label: "Am Hirtengraben 4" },
        { label: "Am Hirtengraben 5" },
    ];


    return (
        <>
            <div className="pop__container">
                <div className="aa__img">
                    <img className="aa__left__img" src={Group} alt="" />
                </div>


                <div className="aa__right">
                    <div className="right__header">
                        <img className="header__logo" src={logo} alt="" />
                        <div className="header__para1">Join us to sell our app</div>
                        <div className="header__para2">“Learn the German highway code in your own language”</div>

                    </div>

                    <div className="aa__right__inputs">

                        <div className="input1">
                            <div className="input__heading">Gender</div>
                            <Autocomplete

                                disablePortal
                                id="combo-box-demo"
                                value={val.salutation}
                                onChange={(e, v) => InputAuto("salutation", v)}
                                name="salutation"
                                options={salutation}
                                sx={{ m: 1, width: "100%" }}
                                renderInput={(params) => <TextField {...params} />}
                            />

                        </div>
                        <div className="input1">
                            <div className="input__heading">Title</div>

                            <Autocomplete

                                disablePortal
                                id="combo-box-demo"
                                value={val.title}
                                onChange={(e, v) => InputAuto("title", v)}
                                options={salutation}
                                name="title"
                                options={title}
                                sx={{ m: 1, width: "100%" }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </div>
                        <div className="input1">
                            <div className="input__heading">First Name</div>

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                id="outlined-error-helper-text"
                                defaultValue="George"
                                value={val.firstName}
                                onChange={InputEvent}
                                name="firstName"
                            // helperText="Incorrect entry."
                            />
                        </div>
                        <div className="input1">
                            <div className="input__heading">Last Name</div>

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                id="outlined-error-helper-text"
                                defaultValue="Sood"
                                value={val.lastName}
                                onChange={InputEvent}
                                name="lastName"

                            // helperText="Incorrect entry."
                            />
                        </div>
                        



                      
                               
                           


                    </div>
                    <div className="button">
                    <button className="bottom__btnn"  >
                                    {loading == true ? <CircularProgress className="loading" /> : "ADD ADMIN"}
                                </button>
                    </div>
                    <div className="copyright__para">Copyright © 2021 Gurubook Germany. All rights reserved</div>






                </div>

                
            </div>
        </>
    )
}

export default PopUp
