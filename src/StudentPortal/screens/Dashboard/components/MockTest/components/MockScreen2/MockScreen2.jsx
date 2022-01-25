import React from 'react'
import "./MockScreen2.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'


const MockScreen2 = () => {
    return (
        <>
            <div className="mock__question_text">Please start the film in order to familiarise yourself with the situation.</div>
            <div className="mock__screen2">
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Near Rivers" />
                    <FormControlLabel control={<Checkbox />} label="Near Lakes" />
                    <FormControlLabel control={<Checkbox />} label="Near marshy areas" />
                </FormGroup>
            </div></>
    )
}

export default MockScreen2
