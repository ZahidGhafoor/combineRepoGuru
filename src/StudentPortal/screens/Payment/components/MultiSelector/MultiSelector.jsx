import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from "react";
import "./MultiSelector.scss"


import bike from "../../../../assets/icons/bike.svg"
import car from "../../../../assets/icons/car.svg"
import truck from "../../../../assets/icons/truck.svg"
import bus from "../../../../assets/icons/bus.svg"


const MultipleSelector = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <div className="ms__container">
            <Box sx={{ Width: "100%" }}>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}><div className='text'><img className='img1' src={bike} style={{marginRight:"2rem", height:"17px" ,width:"30px"}} />Class A </div></MenuItem>
          <MenuItem value={11}><div className='text'><img className='img1' src={car} style={{marginRight:"2rem", height:"17px" ,width:"30px"}}/>Class B </div></MenuItem>
          <MenuItem value={12}><div className='text'><img className='img1' src={truck} style={{marginRight:"2rem", height:"17px" ,width:"30px"}}/>Class C/CE </div></MenuItem>
          <MenuItem value={13}><div className='text'><img className='img1' src={bus} style={{marginRight:"2rem", height:"17px" ,width:"30px"}} />Class D</div></MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>

    )
}

export default MultipleSelector;
