import React, { useState } from 'react'
import "./QuizSideBar.scss"

// MUI
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CircularProgress } from '@mui/material';

// ICONS
import greenadd from "../../../Assets/greenadd.png"


const QuizSideBar = (props) => {
    console.log("sidebar questions are ==========", props)

    const idEvent = (name, data) => {
        props.setSideoptions((pValue) => {
            return {
                ...pValue,
                [name]: data
            }
        })
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {

            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);


            fileReader.onload = (() => {
                resolve(fileReader.result)
            })

            fileReader.onerror = ((error) => {
                reject(error)
            })


        })
    }


    const entringFile = async (event) => {
        let { name } = event.target
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const base64 = await convertBase64(file)

            props.setSideoptions((preVal) => {
                return {
                    ...preVal,
                    [name]: base64
                }
            })

        }
    }



    return (
        <>
            <div className="sb__container">
                {
                    props.cat == null || props.chap == null || props.exceptional == null || props.license == null || props.ques == null || props.types == null ?

                        <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}><CircularProgress /></div>
                        :
                        <>
                            <div className="ac__1">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={props.types}
                                    onChange={(e, v) => idEvent("type", v)}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} placeholder="Question Type" />}
                                />

                            </div>
                            <div className="ac__1">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={props.exceptional}
                                    getOptionLabel={data => data.description}
                                    onChange={(e, v) => idEvent("except", v)}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} placeholder="Exceptional question" />}
                                />

                            </div>
                            <div className="ac__1">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={props.chap}
                                    getOptionLabel={data => data.name}
                                    onChange={(e, v) => idEvent("chapter", v)}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} placeholder="Chapter" />}
                                />

                            </div>
                            <div className="ac__1">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={props.ques}
                                    getOptionLabel={data => data.name}
                                    onChange={(e, v) => idEvent("question", v)}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} placeholder="Class" />}
                                />

                            </div>
                            <div className="ac__1">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={props.license}
                                    getOptionLabel={data => data.code}
                                    onChange={(e, v) => idEvent("licen", v)}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} placeholder="License Class" />}
                                />

                            </div>
                            <div className="ac__1">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={props.cat}
                                    getOptionLabel={data => data.name}
                                    onChange={(e, v) => idEvent("categories", v)}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} placeholder="Category" />}
                                />

                            </div>
                            <div className="ac__1">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={props.cat[0].subCategories}
                                    getOptionLabel={data => data.name}
                                    onChange={(e, v) => idEvent("subCategory", v)}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} placeholder="Sub Category" />}
                                />

                            </div>
                            <div className="ac__1">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={props.cat[0].subCategories[0].questionNumbers}
                                    getOptionLabel={data => data.code}
                                    onChange={(e, v) => idEvent("questionNumber", v)}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} placeholder="1.1.01-001 Type question number here" />}
                                />

                            </div>
                            <div className="ac__1">
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={props.cat[0].subCategories[0].questionNumbers[0].points}
                                    getOptionLabel={data => data.point}
                                    onChange={(e, v) => idEvent("point", v)}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} placeholder="Points" />}
                                />

                            </div>
                        </>}



                <div className="sb__body">
                    <div className="body__header">
                        <p className="header__para">Add Post Input</p>
                        <img src={greenadd} alt="" className="header__icon" />
                    </div>





                    <div className="image">
                        {
                            props.sideoptions.image1 == null ? null :
                                <img style={{ height: "170px", width: "300px", borderRadius: "5px" }} src={props.sideoptions.image1} alt="error" />
                        }
                        <div className="img__label">
                            {props.sideoptions.image1 == null ? <label>Image 1<input name='image1' type="file" onChange={entringFile} /></label> : null}
                        </div>
                    </div>

                    <div className="image">
                        {
                            props.sideoptions.image2 == null ? null :
                                <img style={{ height: "170px", width: "300px", borderRadius: "5px" }} src={props.sideoptions.image2} alt="error" />

                        }
                        <div className="img__label">
                            {props.sideoptions.image2 == null ? <label>Image 2<input name='image2' type="file" onChange={entringFile} /></label> : null}
                        </div>
                    </div>

                    <div className="image">
                        {
                            props.sideoptions.video == null ? null :
                                <video style={{ height: "170px", width: "300px", borderRadius: "5px" }} controls>
                                    <source src={props.sideoptions.video} />
                                </video>

                        }


                        <div className="img__label">
                            {props.sideoptions.video == null ? <label>Add Video<input name='video' type="file" accept='video/*' onChange={entringFile} /></label> : null}
                        </div>
                    </div>






                    <div className="box4__heading">Add Remarks</div>
                    <textarea className="input__box4" name="remarks" onChange={props.inputEvent} placeholder="Add Remarks" value={props.val.remarks} />

                    <div className="box4__heading">Add Help</div>
                    <textarea className="input__box4" name="help" onChange={props.inputEvent} placeholder="Add Help" value={props.val.help} />
                </div>
            </div>

        </>
    )
}

export default QuizSideBar