import React from 'react'
import "./Que.scss"

import pre from "../../assets/icons/pre.svg"
import next from "../../assets/icons/next.svg"

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Que = () => {
    return (
       <div className="que__container">
           <div className="header">
               <div className="left">Question 7 Out of 80</div>
               <div className="left">1.1.203-102/Basic Knoledge</div>
               <div className="left">Points 5</div>
           </div>
           <div className="heading">What Can Increase The Intoxicating /Effects Of Alcohol?</div>
           <div className="options">
           <FormControl component="fieldset">
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Drink Alcoholic Drinks Alone" />
        <FormControlLabel value="male" control={<Radio />} label="Drinking On An Empty Stomach." />
        <FormControlLabel value="other" control={<Radio />} label="Sleeping Pills, Pain Killers Or Dedatives." />
      </RadioGroup>
    </FormControl>

           </div>
           <div className="buttons">
               <div className="pre">
                   <img src={pre} alt="" className="icon" />
                   <div className="prev">PREVIOUS QUESTION</div>
               </div>
               <div className="next">
                   <div className="prev">NEXT QUESTION</div>
                   <img src={next} alt="" className="icon" />
               </div>
           </div>
       </div>
    )
}

export default Que
