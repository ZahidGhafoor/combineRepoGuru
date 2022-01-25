import React, { useState, useEffect } from 'react'
import PracticeButton from '../PracticeSheets/components/PracticeButton/PracticeButton';
import { ReactComponent as Warning } from "../../../../assets/icons/warning.svg"
import "./MockTest.css"
import PartiallyFilledBtn2 from './components/PartiallyFilledBtn2/PartiallyFilledBtn2';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MediaBox from '../Chapter/components/MediaBox/MediaBox';
import Video from "../../../../assets/videos/droneview.mp4"
import Image1 from "../../../../assets/images/mocktest.png"
import Image2 from "../../../../assets/images/warning.png"
import { ReactComponent as BlackCheckBox } from "../../../../assets/icons/blackCheckbox.svg"
import { ReactComponent as RedCheckBox } from "../../../../assets/icons/redCheckBox.svg"
import Keypad from '../../../../components/Keypad2/Keypad2';
import Popup1 from '../Popups/Popup1/Popup1';
import Popup2 from '../Popups/Popup2/Popup2';
import Popup3 from '../Popups/Popup3/Popup3';
import MockScreen1 from './components/MockScreen1/MockScreen1';
import MockScreen2 from './components/MockScreen2/MockScreen2';
import MockScreen3 from './components/MockScreen3/MockScreen3';
import MockScreen4 from './components/MockScreen4/MockScreen4';
import MockScreen5 from './components/MockScreen5/MockScreen5';
import MockScreen6 from './components/MockScreen6/MockScreen6';

const MockTest = () => {
    const [reverse, setReverse] = useState(false);
    const [screen, setScreen] = useState(6);
    const [popup, setPopup] = useState(3)

    return (
        <div className="mock__test">
            {popup == 1 && <Popup1 onClose={() => setPopup(0)} />}
            {popup == 2 && <Popup2 onClose={() => setPopup(0)} />}
            {popup == 3 && <Popup3 onClose={() => setPopup(0)} />}
            <div className="topbar__placeholder"></div>
            <div className="mocktest"></div>
            <div className="mock__test_header"> <div className="chapter__qh_top" style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
                <div className="chapter__qht_left">Question 1 out of 12</div>
                <div className="chapter__qht_center">1.1.203-101/ Basic Knowledge</div>
                <div className="chapter__qht_right">Points 5</div>
            </div></div>
            <div className="mocktest__body">
                {screen === 1 && <MockScreen1 />}
                {screen === 2 && <MockScreen2 />}
                {screen === 3 && <MockScreen3 />}
                {screen === 4 && <MockScreen4 />}
                {screen === 5 && <MockScreen5 />}
                {screen === 6 && <MockScreen6 />}

                <div className="ps__buttons_wrapper">

                    <PartiallyFilledBtn2 />
                    <div className="ps__buttons_right">
                        <div className="tasks__left">
                            <Warning />
                            <span>Tasks Left:</span>
                            <span>29</span>
                        </div>
                        <PracticeButton color="white" background="black" text="BASELINE VEHICLE" />
                        <PracticeButton color="black" background="white" text="SUBMIT" variant="outlined" />
                        <PracticeButton color="black" background="#FF9B00" text="FLAG" />
                        <PracticeButton color="white" background="#027368" text="CONTINUE" />
                    </div>
                </div>
            </div>
            <div className="mock__test_footer"></div>
        </div>
    )
}

export default MockTest
