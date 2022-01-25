import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { ReactComponent as DropdownArrow } from "../../../../assets/icons/droparrow.svg"
import "./MultiSelector.css"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: "100%",
        },
    },
};

const items = [
    {
        value: "1",
        icon: "icon",
        text: "sldjf slfk sdlkf j"
    },
    {
        value: "2",
        icon: "sfsdlkf",
        text: "sldjf slfk sdlkf j"
    },
    {
        value: "3",
        icon: "sfsdlkf",
        text: "sldjf slfk sdlkf j"
    },
    {
        value: "4",
        icon: "sfsdlkf",
        text: "sldjf slfk sdlkf j"
    }
];

const MultipleSelector = ({ classname, setClassname }) => {


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        setClassname(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (

        <FormControl className="multi__selector">
            {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}

            <Select
                labelId=""
                id="demo-multiple-name"
                multiple
                value={classname}
                IconComponent={(props) => (<DropdownArrow {...props} className="multi__drop_icon" />)}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
            >
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        value={item.value}
                    >

                        {item.icon}
                        &nbsp;&nbsp;&nbsp;{`${item.text}`}

                    </MenuItem>

                ))}
            </Select>
        </FormControl>
        // <select className="multi__selector">
        //     {items.map((item, index) => {
        //         return <option value={index + ""}><div className="multi__select_item"><span className="multi__select_itemicon"></span><span className="multi__select_itemtext">{item.text}</span></div></option>
        //     })}
        // </select>

    );
}
export default MultipleSelector;
