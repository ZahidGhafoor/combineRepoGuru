import React from 'react'
import "./Popup2.css"
import { ReactComponent as PopupClose } from "../../../../../assets/icons/popup-close.svg"
import { ReactComponent as PopupWarning } from "../../../../../assets/icons/popup-warning.svg"

const popup2 = ({ onClose }) => {
    return (
        <div className="mocktest__popup2_backdrop" onClick={onClose}>
            <div className="mocktest__popup2_box" onClick={e => { e.stopPropagation() }}>
                <div className="mocktest__popup2_header"><span></span><PopupClose onClick={onClose} className="mocktest__popup2_close" /></div>
                <div className="mocktest__popup2_body">
                    <div className="mocktest__popup2_boldtext">Do you really want to end this test?</div>
                    <div className="mocktest__popup2_lighttext">You still have 29 unanswered question(s)
                        You still have 3 flagged tasks</div>
                    <div className="mocktest__popup2_bottom">
                        <PopupWarning />
                        <div className="mocktest__popup2_btn">Yes, End the test</div>
                        <div className="mocktest__popup2_btn">No, Continue with the test</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default popup2
