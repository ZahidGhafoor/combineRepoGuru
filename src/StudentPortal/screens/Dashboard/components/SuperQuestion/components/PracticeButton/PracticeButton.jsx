import React from 'react'
import "./PracticeButton.css"

const PracticeButton = ({ text, variant, color, background }) => {
    return (
        <div className="practice__btn" style={{ color, background, border: variant === "outlined" ? "1px solid " + color : "none" }}>
            {text}
        </div>
    )
}

export default PracticeButton
