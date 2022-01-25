import React from 'react'
import "./MockScreen4.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ReactComponent as BlackCheckBox } from "../../../../../../assets/icons/blackCheckbox.svg"
import { ReactComponent as RedCheckBox } from "../../../../../../assets/icons/redCheckBox.svg"


const MockScreen4 = () => {
    return (
        <>
            <div className="mock__question_text">Please start the film in order to familiarise yourself with the situation.</div>
            <div className="mock__screen4">
                <div className="mock__screen4_box">
                    <div className="ms4__title1">
                        The condition of the

                    </div>
                    <div className="ms4__title2_wrap">
                        <div className="ms4__title2_left">
                            Your<br /> solution
                        </div>
                        <div className="ms4__title2_right">
                            Sample<br /> solution
                        </div>
                    </div>
                    <div className="ms4__body">
                        <div className="ms4__body_item">
                            <div className="ms4__body_left"><BlackCheckBox /></div>
                            <div className="ms4__body_center"><RedCheckBox /></div>
                            <div className="ms4__body_right">- Braking system</div></div>
                        <div className="ms4__body_item">
                            <div className="ms4__body_left"><BlackCheckBox /></div>
                            <div className="ms4__body_center"><RedCheckBox /></div>
                            <div className="ms4__body_right">- road surface</div></div>
                        <div className="ms4__body_item">
                            <div className="ms4__body_left"><BlackCheckBox /></div>
                            <div className="ms4__body_center"><RedCheckBox /></div>
                            <div className="ms4__body_right">- tyres</div></div>
                    </div>
                </div>
            </div></>
    )
}

export default MockScreen4
