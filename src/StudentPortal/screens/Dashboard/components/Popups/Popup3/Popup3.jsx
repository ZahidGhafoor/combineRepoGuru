import React from 'react'
import { ReactComponent as PopupClose } from "../../../../../assets/icons/popup-close.svg"
import "./Popup3.css"

const popup3 = ({ onClose }) => {
    return (
        <div className="mocktest__popup3_backdrop" onClick={onClose}>
            <div className="mocktest__popup3_box" onClick={e => { e.stopPropagation() }}>
                <div className="mocktest__popup3_header"><span></span><PopupClose onClick={onClose} className="mocktest__popup3_close" /></div>
                <div className="mocktest__popup3_body">
                    <div className="mocktest__popup3_boldtext">The following sections have not yet been completed:<br />
                        B<br />
                        Do you still want to submit the test?</div>

                    <div className="mocktest__popup3_bottom">
                        <div className="mocktest__popup3_btn">Yes, End the test</div>
                        <div className="mocktest__popup3_btn">No, Continue with the test</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default popup3
