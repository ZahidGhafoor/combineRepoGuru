import React from 'react'
import "./MockScreen.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import Image from "../../../../../../assets/images/warning.png"

const MockScreen6 = () => {
    return (
        <>
            <div className="mock__question_text">Please start the film in order to familiarise yourself with the situation.</div>
            <div className="mock__screen6">
                <div className="mock__screen3_left"><img src={Image} /></div>
                <div className="mock__screen3_right">
                    <FormGroup>
                        <span className="ms3__checkbox_title">title goes here...</span>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Near Rivers" />
                        <FormControlLabel control={<Checkbox />} label="Near Lakes" />
                        <FormControlLabel control={<Checkbox />} label="Near marshy areas" />
                    </FormGroup>
                </div>
            </div></>
    )
}

export default MockScreen6
