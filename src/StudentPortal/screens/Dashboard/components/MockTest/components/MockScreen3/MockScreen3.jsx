import React from 'react'
import "./MockScreen3.css"
import Image from "../../../../../../assets/images/mocktest.png"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'

const MockScreen3 = () => {
    return (
        <>
            <div className="mock__question_text">Please start the film in order to familiarise yourself with the situation.</div>
            <div className="mock__screen3">
                <div className="mock__screen3_left"><img src={Image} width="100%" height="100%" /></div>
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

export default MockScreen3
