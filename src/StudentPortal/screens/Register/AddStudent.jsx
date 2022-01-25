import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import "./AddStudent.scss"

// Icons
import logo from "../../../Assets/logo.png"
import Group from "../../../Assets/Group.png"

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
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';





const AddStudent = () => {

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
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
            <div className="as__container">
                <div className="aa__img">
                    <img className="aa__left__img" src={Group} alt="" />
                </div>


                <div className="aa__right">
                    <div className="right__header">
                        <img className="header__logo" src={logo} alt="" />
                        <div className="header__para1">Join us to start learning</div>
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

                            <div className="input__heading">Date of Birth</div>

                            <TextField
                                id="date"
                                type="number"
                                // placeholder="yyyy-mm-dd"
                                defaultValue="2021-11-15"
                                sx={{ m: 1, width: '100%' }}
                                value={val.dob}
                                onChange={InputEvent}
                                name="dob"


                            />




                        </div>
                        <div className="input1">
                            <div className="input__heading">Place of Birth</div>

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                id="outlined-error-helper-text"
                                // defaultValue="Kelkheim"
                                value={val.place}
                                onChange={InputEvent}
                                name="place"
                            // helperText="Incorrect entry."
                            />
                        </div>
                        <div className="input1">
                            <div className="input__heading">Email Address</div>

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                type="email"
                                id="outlined-error-helper-text"
                                // defaultValue="georgesood@gmail.com"
                                // placeholder='Email Adress'
                                value={val.email}
                                onChange={InputEvent}
                                name="email"
                            // helperText="Incorrect entry."
                            />
                        </div>
                        <div className="input1">
                            <div className="input__heading">Post Code</div>

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                type="number"
                                id="outlined-error-helper-text"
                                defaultValue="65779"
                                value={val.postCode}
                                onChange={InputEvent}
                                name="postCode"
                            // helperText="Incorrect entry."
                            />
                        </div>
                        <div className="input1">
                            <div className="input__heading">Street/Street Nr.</div>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={street}
                                value={val.street}
                                onChange={(e, v) => InputAuto("street", v)}
                                name="street"
                                sx={{ m: 1, width: "100%" }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </div>
                        <div className="input1">
                            <div className="input__heading">City</div>

                            <TextField sx={{ m: 1, width: '100%' }}
                                // error
                                id="outlined-error-helper-text"

                                defaultValue="Kelkhelm"
                                value={val.city}
                                onChange={InputEvent}
                                name="city"
                            // helperText="Incorrect entry."
                            />
                        </div>
                        <div className="pass__input">
                            <div className="input__heading">Password</div>

                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
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

                                />
                            </FormControl>

                        </div>
                        <div className="pass__input2">

                            <div className="input__heading">Re-Enter Password</div>

                            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">

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

                                />
                                {cvalues.password != val.password ? <><div className="confirm__pass">password does not matach</div></> : null}
                            </FormControl>

                        </div>

                        <div className="right__checkbox">
                            <div className="check1">
                                <div className='checkbox'>
                                    <Checkbox
                                        color="success"
                                        {...label}
                                        icon={<CheckCircleIcon />}
                                        checkedIcon={<CheckCircleIcon />}
                                    />

                                </div>
                                <div className="line">
                                    I Agree To GuruBook's Terms & Conditions And Privacy Policy.
                                </div>
                            </div>
                            <div className="check1">
                                <div className='checkbox'>
                                    <Checkbox
                                        color="success"
                                        {...label}
                                        icon={<CheckCircleIcon />}
                                        checkedIcon={<CheckCircleIcon />}
                                    />

                                </div>
                                <div className="line">
                                    I Agree To Send My Data To Gurubook To Get Personalised Recommendation On Learning Framework. <br />Note: We Don't Serve Ads Based On This Data.
                                </div>
                            </div>
                            <div className="check1">
                                <div className='checkbox'>
                                    <Checkbox
                                        color="success"
                                        {...label}
                                        icon={<CheckCircleIcon />}
                                        checkedIcon={<CheckCircleIcon />}
                                    />

                                </div>
                                <div className="line">
                                    I Agree To Gurubook's Login Policy.
                                </div>
                            </div>
                        </div>



                       


                    </div>

                                    <div className="already">
                                        Already Have An Account? Login
                                    </div>
                    <div className="button">
                    {setShow == false ?
                            <button className="bottom__btnn__disable"  >
                                {loading == true ? <CircularProgress className="loading" /> : "Save And Continue"}
                            </button> :
                            <>
                                <button className="bottom__btnn"  >
                                    {loading == true ? <CircularProgress className="loading" /> : "Save And Continue"}
                                </button>
                            </>}
                    </div>
                    <div className="copyright__para">Copyright © 2021 Gurubook Germany. All rights reserved</div>






                </div>


            </div>
        </>
    )
}

export default AddStudent
