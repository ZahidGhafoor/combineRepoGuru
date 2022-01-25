import React from 'react'
import { ReactComponent as NextBtn } from "../../../../assets/icons/nextBtn.svg"
import { ReactComponent as PrevBtn } from "../../../../assets/icons/prevBtn.svg"
import "./CustomPagination.css"
const CustomPagination = ({ children, nextClick, prevClick }) => {
    return (
        <div className="custom__pagination_wrapper">
            <div onClick={prevClick}><PrevBtn /></div>
            <div className="custom__pagination_box"> {children}</div>
            <div onClick={nextClick}><NextBtn /></div>

        </div>
    )
}

export default CustomPagination
