import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AddAdmin.scss"

// API
import { addAdmin } from '../../Api/addAdmin';

// Icons
import logo from "../../Assets/logo.png"
import Group from "../../Assets/Group.png"

// MUI
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';







const AddAdmin = () => {
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
    const admin = async () => {
        setLoading(true)
        const res = await addAdmin(val)
        if (res.error != null) {
            console.log("Error is =======", res.error)
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
            console.log("admin added sunccessfully", res.data)
            setLoading(false)
            toast.success('Admin Added Sunccessfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        
        console.log("add admin=======", res)
        
    }
    
    const InputEvent = (event, data) => {
        const { value, name } = event.target;
        switch (name) {
            case "iban":
                setVal((pValue) => {
                    return {
                        ...pValue,
                        [name]: (value),
                    }
                })
                
                break;
        
            default:
                setVal((pValue) => {
                    return {
                        ...pValue,
                        [name]: value,
                    }
                })
                break;
        }
       

      

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
            <div className="aa__container">
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
                            <Autocomplete
                            
                                disablePortal
                                id="combo-box-demo"
                                value={val.salutation}
                                onChange={(e, v) => InputAuto("salutation", v)}
                                name="salutation"
                                options={salutation}
                                sx={{ m: 1, width: "100%" }}
                                renderInput={(params) => <TextField {...params} label="Salutation" />}
                            />

                        </div>
                        <div className="input1">

                            <Autocomplete
                            
                                disablePortal
                                id="combo-box-demo"
                                value={val.title}
                                onChange={(e, v) => InputAuto("title", v)}
                                options={salutation}
                                name="title"
                                options={title}
                                sx={{ m: 1, width: "100%" }}
                                renderInput={(params) => <TextField {...params} label="Title" />}
                            />
                        </div>
                        <div className="input1">

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                id="outlined-error-helper-text"
                                label="First Name"
                                defaultValue="George"

                                value={val.firstName}
                                onChange={InputEvent}
                                name="firstName"
                                
                            // helperText="Incorrect entry."
                            />
                        </div>
                        <div className="input1">

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                id="outlined-error-helper-text"
                                label="Last Name"
                                defaultValue="Sood"
                                value={val.lastName}
                                onChange={InputEvent}
                                name="lastName"

                            // helperText="Incorrect entry."
                            />
                        </div>
                        <div className="input1">

                            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack sx={{ m: 1, width: '35ch' }}>

                                    <DatePicker
                                        disableFuture
                                        label="Date of Birth"
                                        openTo="year"
                                        views={['year', 'month', 'day']}
                                        value={val.dob}
                                        onChange={InputEvent}
                                        name="dob"

                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                            </LocalizationProvider> */}


                            <TextField
                                id="date"
                                label="Date of Birth"
                                type="number"
                                placeholder="yyyy-mm-dd"
                                defaultValue="2021-11-15"
                                sx={{ m: 1, width: '100%' }}
                                value={val.dob}
                                onChange={InputEvent}
                                name="dob"


                            />




                        </div>
                        <div className="input1">

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                id="outlined-error-helper-text"
                                label="Place of Birth"
                                // defaultValue="Kelkheim"
                                value={val.place}
                                onChange={InputEvent}
                                name="place"
                            // helperText="Incorrect entry."
                            />
                        </div>
                        <div className="input1">

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                type="email"
                                id="outlined-error-helper-text"
                                label="Email Adress"
                                // defaultValue="georgesood@gmail.com"
                                placeholder='Email Adress'
                                value={val.email}
                                onChange={InputEvent}
                                name="email"
                            // helperText="Incorrect entry."
                            />
                        </div>
                        <div className="input1">

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                type="number"
                                id="outlined-error-helper-text"
                                label="Post Code"
                                defaultValue="65779"
                                value={val.postCode}
                                onChange={InputEvent}
                                name="postCode"
                            // helperText="Incorrect entry."
                            />
                        </div>
                        <div className="input1">

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={street}
                                value={val.street}
                                onChange={(e, v) => InputAuto("street", v)}
                                name="street"
                                sx={{ m: 1, width: "100%" }}
                                renderInput={(params) => <TextField {...params} label="Street & Street Nr." />}
                            />
                        </div>
                        <div className="input1">

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                id="outlined-error-helper-text"
                                label="City"
                                defaultValue="Kelkhelm"
                                value={val.city}
                                onChange={InputEvent}
                                name="city"
                            // helperText="Incorrect entry."
                            />
                        </div>
                        <div className="pass__input">

                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={val.showPassword ? 'text' : 'password'}
                                    value={val.password}
                                    onChange={handleChange("password")}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {val.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>

                        </div>
                        <div className="pass__input2">

                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={cvalues.showPassword ? 'text' : 'password'}
                                    value={cvalues.password}

                                    onChange={handleChange2('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword2}
                                                onMouseDown={handleMouseDownPassword2}
                                                edge="end"
                                            >
                                                {cvalues.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                                {cvalues.password != val.password ? <><div className="confirm__pass">password does not matach</div></> : null}
                            </FormControl>

                        </div>

                        <div className="input1">

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                id="outlined-error-helper-text"
                                label="IBAN"
                                defaultValue="DE 82 2345 6547 4857 5419 34"
                                value={val.iban.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()}
                                onChange={InputEvent}
                                name="iban"

                            // helperText="IBAN should be at least 2 alpha numeric characters, and should contain at least 20 numeric characters"
                            />
                        </div>
                        <div className="input1">

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                id="outlined-error-helper-text"
                                label="Driving School Name"
                                defaultValue="Fahrsuhule Mentor"
                                value={val.drivingSchoolName}
                                onChange={InputEvent}
                                name="drivingSchoolName"
                            // helperText="Incorrect entry."
                            />
                        </div>
                        <div className="input1">

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                id="outlined-error-helper-text"
                                label="First Name (Account Holder)"
                                defaultValue="Joe"
                                value={val.accountHolderFirstName}
                                onChange={InputEvent}
                                name="accountHolderFirstName"

                            // helperText="Incorrect entry."
                            />
                        </div>
                        <div className="input1">

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                id="outlined-error-helper-text"
                                label="Last Name (Account Holder)"
                                defaultValue="Baiden"
                                value={val.accountHolderLastName}
                                onChange={InputEvent}
                                name="accountHolderLastName"
                            // helperText="Incorrect entry."
                            />
                        </div>



                        {setShow == false ?
                            <button onClick={admin} className="bottom__btnn__disable"  >
                                {loading == true ? <CircularProgress className="loading" /> : "ADD ADMIN"}
                            </button> :
                            <>
                                <button onClick={admin} className="bottom__btnn"  >
                                    {loading == true ? <CircularProgress className="loading" /> : "ADD ADMIN"}
                                </button>
                            </>}


                    </div>
                    <div className="copyright__para">Copyright © 2021 Gurubook Germany. All rights reserved</div>





                </div>
            </div>
        </>
    )
}

export default AddAdmin
