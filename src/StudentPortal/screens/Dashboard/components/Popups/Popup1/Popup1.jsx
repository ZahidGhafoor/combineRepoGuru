import React from 'react'
import "./Popup1.css"
import { ReactComponent as PopupClose } from "../../../../../assets/icons/popup-close.svg"

const Popup1 = ({ onClose }) => {
    return (
        <div className="mocktest__popup1_backdrop" onClick={onClose}>
            <div className="mocktest__popup1_box" onClick={e => { e.stopPropagation() }}>
                <div className="mocktest__popup1_header"><span>Baseline vehicle - category Basic Knowledge...</span><PopupClose onClick={onClose} className="mocktest__popup1_close" /></div>
                <div className="mocktest__popup1_body">
                    <div className="mocktest__popup1_lighttext">You are driving a ...</div>
                    <div className="mocktest__popup1_boldtext">Vehicle with combustion engine</div>
                    <div className="mocktest__popup1_lighttext">Please note: Whenever special vehicle characteristics are
                        explicitly mentioned in the examination question, these must be taken into consideration when answering the question!</div>
                </div>
            </div>
        </div>
    )
}

export default Popup1
