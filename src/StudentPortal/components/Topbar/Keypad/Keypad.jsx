import React, { useState } from 'react'
import "./Keypad.css"
const Keypad = () => {
    const [value, setValue] = useState("")
    const handleClick = (val) => {
        if (val !== "delete" && val !== "c") {
            setValue(value + val)
        }
        else if (val === "delete") {
            setValue("")
        }
        else if (val === "c") {
            setValue(pre => {
                let newstr = pre.substring(0, pre.length - 1)
                return newstr
            })
        }
    }
    return (
        <div className="keypad__wrapper">
            <div className="keypad__box">
                <div className="keypad__header">
                    <div className="keypad__header_left">Answer:</div>
                    <div className="keypad__header_right">
                        <input className="keypad__input_screen" value={value} />
                    </div>
                    <div>m</div>
                </div>
                <div className="keypad__body">
                    <span className="keypad__body_btn" onClick={() => handleClick("1")}  >1</span>
                    <span className="keypad__body_btn" onClick={() => handleClick("2")} >2</span>
                    <span className="keypad__body_btn" onClick={() => handleClick("3")} >3</span>
                    <span className="keypad__body_btn" onClick={() => handleClick("4")} >4</span>
                    <span className="keypad__body_btn" onClick={() => handleClick("5")} >5</span>
                    <span className="keypad__body_btn" onClick={() => handleClick("6")} >6</span>
                    <span className="keypad__body_btn" onClick={() => handleClick("7")} >7</span>
                    <span className="keypad__body_btn" onClick={() => handleClick("8")} >8</span>
                    <span className="keypad__body_btn" onClick={() => handleClick("9")} >9</span>
                    <span className="keypad__body_btn" onClick={() => handleClick("0")} >0</span>
                    <span className="keypad__body_btn" onClick={() => handleClick(",")} >,</span>
                    <span className="keypad__body_btn" onClick={() => handleClick("c")} >c</span>
                </div>
                <div className="keypad__bottom">
                    <div className="keypad__delete_btn" onClick={() => handleClick("delete")}>Delete</div>
                </div>
            </div>
        </div>
    )
}

export default Keypad
