import React, { useEffect, useState } from "react";
import "./Quiz.scss";

// icons
import back from "../../../Assets/back.png";
import farward from "../../../Assets/farward.png";
import print from "../../../Assets/print.png";
import Delete from "../../../Assets/Delete.png";
import check1 from "../../../Assets/check1.png";
import close from "../../../Assets/close.png";
import menu from "../../../Assets/menu.png";
import quemark from "../../../Assets/quemark.png";
import redcross from "../../../Assets/redcross.png";
import stop from "../../../Assets/stop.png";
import subtract from "../../../Assets/Subtract.svg";
import add from "../../../Assets/addbox.svg";
import greenadd from "../../../Assets/greenadd.png";
import vol from "../../../Assets/vol.png";
import videopng from "../../../Assets/videopng.png";

// mui
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import { CircularProgress, FormGroup } from "@mui/material";

// API's
import { getQuestion } from "../../../Api/question";


const NUMERICAL_INPUT = (props) => {
  const [open2, setOpen2] = useState(true)
  const [value, setValue] = useState("")

  console.log("question props are====",props)

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

  const handleOpen2 = () => {
    setOpen2(!open2)
  }
  return (
    <>
      <div className="body__box3">
        <div className="box2__data">
          <div className="box2__numbering">
            <div className="numbering__upper">
              <img src={menu} alt="" className="numbering__img" />
              <p className="numbering__para">{props.index+1}</p>
            </div>

            {
              open2 == true ?
                <img onClick={handleOpen2} src={subtract} alt="" className="number__bottom__img cursor" /> :
                <img onClick={handleOpen2} src={add} alt="" className="number__bottom__img cursor" />
            }
          </div>

          <div className="box2__header">
            <p className="header__para1">Question {props.index+1}  out of {props.total}</p>
            <p className="header__para1">{props.data.questionNumber.code} / {props.data.questionClass.name}</p>
            <p className="header__para1">Points {props.data.point}</p>
          </div>
          <div className="box2__header">
            <p className="header__para2">
              {props.data.questionTitle}
            </p>
            <div className="heading__icons">
              <img src={quemark} alt="" className="heading__icon1" />
              <img src={vol} alt="" className="heading__icon1" />
            </div>
          </div>

          {
            open2 == true ?
              <div className="box3__body">
                <div className="box3__header">
                  <p className="header__para1">type your text here:</p>
                  <input type="text" className="box3__input" value={value} />

                  <p className="header__para1">type your text here</p>
                </div>
                <div className="box2__calc">
                  <div className="calc__numbers">
                    <p onClick={() => handleClick("1")} className="number1 cursor">1</p>
                    <p onClick={() => handleClick("2")} className="number1 cursor">2</p>
                    <p onClick={() => handleClick("3")} className="number1 cursor">3</p>
                    <p onClick={() => handleClick("4")} className="number1 cursor">4</p>
                    <p onClick={() => handleClick("5")} className="number1 cursor">5</p>
                    <p onClick={() => handleClick("6")} className="number1 cursor">6</p>
                    <p onClick={() => handleClick("7")} className="number1 cursor">7</p>
                    <p onClick={() => handleClick("8")} className="number1 cursor">8</p>
                    <p onClick={() => handleClick("9")} className="number1 cursor">9</p>
                    <p onClick={() => handleClick("0")} className="number1 cursor">0</p>
                    <p onClick={() => handleClick(",")} className="number1 cursor">,</p>
                    <p onClick={() => handleClick("c")} className="number1 cursor">C</p>
                  </div>
                  <p onClick={() => handleClick("delete")} className="number2 cursor">Delete</p>
                </div>
              </div> :
              null

          }

        </div>
      </div>
    </>
  )
}

const JUST_QUESTION = (props) => {
  return (
    <>
      <div className="body__box5">
        <div className="box2__data">
          <div className="box2__numbering">
            <div className="numbering__upper">
              <img src={menu} alt="" className="numbering__img" />
              <p className="numbering__para">{props.index+1}</p>
            </div>
            <img src={subtract} alt="" className="number__bottom__img" />
          </div>

          <div className="box2__header">
            <p className="header__para1">Question {props.index+1}  out of {props.total}</p>
            <p className="header__para1">{props.data.questionNumber.code}/  {props.data.questionClass.name}</p>
            <p className="header__para1">Points {props.data.point}</p>
          </div>
          <div className="box2__header">
            <p className="header__para2">
            {props.data.questionTitle}
            </p>
            <div className="heading__icons">
              <img src={quemark} alt="" className="heading__icon1" />
              <img src={vol} alt="" className="heading__icon1" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const TRAFFIC_SIGN_QUESTION = (props) => {

  const [open3, setOpen3] = useState(true)
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      gilad: false,
      jason: false,
      antoine: false,
      [event.target.name]: event.target.checked,
    });
  };

  const handleOpen3 = () => {
    setOpen3(!open3)
  }

  return (
    <>
      <div className="body__box2">
        <div className="box2__data">
          <div className="box2__numbering">
            <div className="numbering__upper">
              <img src={menu} alt="" className="numbering__img" />
              <p className="numbering__para">{props.index+1}</p>
            </div>
            {
              open3 == true ?
                <img onClick={handleOpen3} src={subtract} alt="" className="number__bottom__img cursor" /> :
                <img onClick={handleOpen3} src={add} alt="" className="number__bottom__img cursor" />
            }

          </div>

          <div className="box2__header">
            <p className="header__para1">Question {props.index+1}  out of {props.total}</p>
            <p className="header__para1">{props.data.questionNumber.code} / {props.data.questionClass.name}</p>
            <p className="header__para1">Points {props.data.point}</p>
          </div>
          <div className="box2__header">
            <p className="header__para2">
            {props.data.questionTitle}
            </p>
            <div className="heading__icons">
              <img src={quemark} alt="" className="heading__icon1" />
              <img src={vol} alt="" className="heading__icon1" />
            </div>
          </div>

          {
            open3 == true ?
              <div>
                <div className="box2__body">
                  <div className="body__left">
                    <img
                      src={stop}
                      alt=""
                      className="body__left__img box3__img"
                    />
                  </div>
                  <div className="body__right">
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <div className="radio__group">
                          <div className="right__radio">
                            <FormControlLabel
                              value="female"
                              control={
                                <Checkbox
                                  checked={state.gilad}
                                  onChange={handleChange}
                                  name="gilad"
                                />
                              }
                              label="auf die Fahrbahn fahren."
                            />
                          </div>
                          <div className="right__radio">
                            <FormControlLabel
                              value="male"
                              control={
                                <Checkbox
                                  checked={state.jason}
                                  onChange={handleChange}
                                  name="jason"
                                />
                              }
                              label="auf dem Radweg weiterfahren."
                            />
                          </div>
                          <div
                            style={{ marginBottom: "0" }}
                            className="right__radio"
                          >
                            <FormControlLabel
                              value="other"
                              control={
                                <Checkbox
                                  checked={state.antoine}
                                  onChange={handleChange}
                                  name="antoine"
                                />
                              }
                              label="stehen bleiben."
                            />
                          </div>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>

                <div className="body__footer">
                  <p className="fotter__heading">Rmarks</p>
                  <p className="fotter__para">
                  {props.data.remarks}
                  </p>
                </div>
              </div>

              : null
          }

        </div>
      </div>
    </>
  )
}

const PICTURE_BASED_QUESTION = (props) => {
  const [open, setOpen] = useState(true)

  const [video, setVideo] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });
  const handleOpen = () => {
    setOpen(!open)
  }
  const handleChange2 = (event) => {
    setVideo({
      gilad: false,
      jason: false,
      antoine: false,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <>
      <div className="body__box2">
        <div className="box2__data">
          <div className="box2__numbering">
            <div className="numbering__upper">
              <img src={menu} alt="" className="numbering__img" />
              <p className="numbering__para">{props.index+1}</p>
            </div>
            {
              open == true ?
                <img onClick={handleOpen} src={subtract} alt="" className="number__bottom__img cursor" /> :
                <img onClick={handleOpen} src={add} alt="" className="number__bottom__img cursor" />
            }
          </div>

          <div className="box2__header">
            <p className="header__para1">Question {props.index+1}  out of {props.total}</p>
            <p className="header__para1">{props.data.questionNumber.code} / {props.data.questionClass.name}</p>
            <p className="header__para1">Points {props.data.point}</p>
          </div>
          <div className="box2__header">
            <p className="header__para2">
            {props.data.questionTitle}
            </p>
            <div className="heading__icons">
              <img src={quemark} alt="" className="heading__icon1" />
              <img src={vol} alt="" className="heading__icon1" />
            </div>
          </div>

          {open == true ?
            <div>
              <div className="box2__body">
                <div className="body__left">
                  <img src={videopng} alt="" className="body__left__img" />
                </div>
                <div className="body__right">
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <div className="radio__group">
                        <div className="right__radio">
                          <FormControlLabel
                            value="female"
                            control={
                              <Checkbox
                                checked={video.gilad}
                                onChange={handleChange2}
                                name="gilad"
                              />
                            }
                            label="auf die Fahrbahn fahren."
                          />
                        </div>
                        <div className="right__radio">
                          <FormControlLabel
                            value="male"
                            control={
                              <Checkbox
                                checked={video.jason}
                                onChange={handleChange2}
                                name="jason"
                              />
                            }
                            label="auf dem Radweg weiterfahren."
                          />
                        </div>
                        <div
                          style={{ marginBottom: "0" }}
                          className="right__radio"
                        >
                          <FormControlLabel
                            value="other"
                            control={
                              <Checkbox
                                checked={video.antoine}
                                onChange={handleChange2}
                                name="antoine"
                              />
                            }
                            label="stehen bleiben."
                          />
                        </div>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <div className="body__footer">
                <p className="fotter__heading">Rmarks</p>
                <p className="fotter__para">
                {props.data.remarks}
                </p>
              </div>
            </div>
            : null}
        </div>
      </div>
    </>
  )
}

const VIDEO_QUESTION = (props) => {
  const [open4, setOpen4] = useState(true)

  const [videoTwo, setVideoTwo] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });

  const handleChange3 = (event) => {
    setVideoTwo({
      gilad: false,
      jason: false,
      antoine: false,
      [event.target.name]: event.target.checked,
    });
  };

  const handleOpen4 = () => {
    setOpen4(!open4)
  }
  return (
    <>
      <div className="body__box2">
        <div className="box2__data">
          <div className="box2__numbering">
            <div className="numbering__upper">
              <img src={menu} alt="" className="numbering__img" />
              <p className="numbering__para">{props.index+1}</p>
            </div>

            {
              open4 == true ?
                <img onClick={handleOpen4} src={subtract} alt="" className="number__bottom__img cursor" /> :
                <img onClick={handleOpen4} src={add} alt="" className="number__bottom__img cursor" />
            }
          </div>

          <div className="box2__header">
            <p className="header__para1">Question {props.index+1}  out of {props.total}</p>
            <p className="header__para1">{props.data.questionNumber.code} / {props.data.questionClass.name}</p>
            <p className="header__para1">Points {props.data.point}</p>
          </div>
          <div className="box2__header">
            <p className="header__para2">
            {props.data.questionTitle}
            </p>
            <div className="heading__icons">
              <img src={quemark} alt="" className="heading__icon1" />
              <img src={vol} alt="" className="heading__icon1" />
            </div>
          </div>
          {
            open4 == true ?
              <div>
                <div className="box2__body">
                  <div className="body__left">
                    <img src={videopng} alt="" className="body__left__img" />
                  </div>
                  <div className="body__right">
                    <FormControl component="fieldset">
                      <FormGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <div className="radio__group">
                          <div className="right__radio">
                            <FormControlLabel
                              value="female"
                              control={
                                <Checkbox
                                  checked={videoTwo.gilad}
                                  onChange={handleChange3}
                                  name="gilad"
                                />
                              }
                              label="auf die Fahrbahn fahren."
                            />
                          </div>
                          <div className="right__radio">
                            <FormControlLabel
                              value="male"
                              control={
                                <Checkbox
                                  checked={videoTwo.jason}
                                  onChange={handleChange3}
                                  name="jason"
                                />
                              }
                              label="auf dem Radweg weiterfahren."
                            />
                          </div>
                          <div
                            style={{ marginBottom: "0" }}
                            className="right__radio"
                          >
                            <FormControlLabel
                              value="other"
                              control={
                                <Checkbox
                                  checked={videoTwo.antoine}
                                  onChange={handleChange3}
                                  name="antoine"
                                />
                              }
                              label="stehen bleiben."
                            />
                          </div>
                        </div>
                      </FormGroup>
                    </FormControl>
                  </div>
                </div>

                <div className="body__footer">
                  <p className="fotter__heading">Rmarks</p>
                  <p className="fotter__para">
                  {props.data.remarks}
                  </p>
                </div>
              </div>
              : null

          }


        </div>
      </div>
    </>
  )
}

const Quiz = (props) => {

  console.log("all Inputs are=======", props.inputList)



  const [tick, setTick] = useState({
    line1: null,
    line2: null,
    line3: null
  })

  const checkTick = (name) => {
    setTick((preValue) => {
      return {
        ...preValue,
        [name]: tick[name] ? false : true
      }
    })
  }

  const [allQues, setAllQues] = useState()





  const next = () => {
    if (props.lang >= 8) {
      props.setLang(1);
    } else {
      props.setLang(parseFloat(props.lang) + 1);
    }
  };
  const prev = () => {
    if (props.lang <= 1) {
      props.setLang(8);
    } else {
      props.setLang(parseFloat(props.lang) - 1);
    }
  };



  useEffect(async () => {
    let res = await getQuestion()
    if (res.error != null) {
      console.log("Something went wrong");
    } else {
      setAllQues(res.data)

    }
  }, [])
  console.log("get question are ==========", allQues)

  return (
    <>
      <div className="qu__container">
        <div className="qu__header">
          <img src={back} alt="" className="back__icon" onClick={prev} />
          <div
            id="1"
            onClick={() => props.setLang(1)}
            className={`header__lang1 ${props.lang == 1 ? "blue__btn" : null}`}
          >
            ENGLISH
          </div>
          <div
            id="2"
            onClick={() => props.setLang(2)}
            className={`header__lang1 ${props.lang == 2 ? "blue__btn" : null}`}
          >
            GERMAN
          </div>
          <div
            id="3"
            onClick={() => props.setLang(3)}
            className={`header__lang1 ${props.lang == 3 ? "blue__btn" : null}`}
          >
            PERSIAN
          </div>
          <div
            id="4"
            onClick={() => props.setLang(4)}
            className={`header__lang1 ${props.lang == 4 ? "blue__btn" : null}`}
          >
            URDU
          </div>
          <div
            id="5"
            onClick={() => props.setLang(5)}
            className={`header__lang1 ${props.lang == 5 ? "blue__btn" : null}`}
          >
            GREEK
          </div>
          <div
            id="6"
            onClick={() => props.setLang(6)}
            className={`header__lang1 ${props.lang == 6 ? "blue__btn" : null}`}
          >
            RUSSIAN
          </div>
          <div
            id="7"
            onClick={() => props.setLang(7)}
            className={`header__lang1 ${props.lang == 7 ? "blue__btn" : null}`}
          >
            PUNJABI
          </div>
          <div
            id="8"
            onClick={() => props.setLang(8)}
            className={`header__lang1 ${props.lang == 8 ? "blue__btn" : null}`}
          >
            HINDI
          </div>
          <img src={farward} alt="" className="back__icon" onClick={next} />
        </div>

        <div className="qu__body">
          <div className="body__header">
            <div className="cname">
              {/* <div className="header__cname">Chapter Name</div> */}
              <input
                type="text"
                placeholder="Chapter Name"
                className="header__cname"
              />
              <div className="cname__border"></div>
            </div>
            <div className="header__btn">
              <div onClick={props.save} className="header__btn1">
                <img src={print} alt="" className="bt1__img" />
                <p className="btn1__para">SAVE & EXIT</p>
              </div>
              <div
                style={{ backgroundColor: "rgba(233, 119, 119, 1)" }}
                className="header__btn1 "
              >
                <img src={Delete} alt="" className="bt1__img" />
                <p className="btn1__para">DELETE TOPIC</p>
              </div>
            </div>
          </div>

          <div className="body__box1">
            <div className="box1__data">
              <div className="box1__input1">
                <input
                  type="text"
                  className="input__question"
                  placeholder="Type Question Here"
                  onChange={props.inputEvent}
                  value={props.val.question}
                  name="question"
                />
              </div>
              <div style={{ marginTop: "1.5rem" }} className="box1__input1">
                <input
                  type="text"
                  className="input__sub__question"
                  placeholder="Type Sub Question Here"
                  onChange={props.inputEvent}
                  value={props.val.subQuestion}
                  name="subQuestion"
                />
              </div>


              <div className="box1__que1 ">
                <img src={menu} alt="" className="que1__img1" />
                <img src={redcross} alt="" className="que1__img2" />
                <p className="que1__opt1">A</p>
                <div className="box1__input">
                  <input
                    type="text"
                    className="que1__input"
                    placeholder="Type Option Here"
                    onChange={props.inputEvent}
                    value={props.val.choice1}
                    name="choice1"

                  />
                </div>
                <img src={check1} alt="" className={tick.line1 == true ? "tick" : "qu1__img1"} onClick={() => { checkTick("line1") }} />
                <img src={close} alt="" className={tick.line1 == false ? "false" : "qu1__img1"} onClick={() => { checkTick("line1") }} />
              </div>
              <div className="box1__que1">
                <img src={menu} alt="" className="que1__img1" />
                <img src={redcross} alt="" className="que1__img2" />
                <p className="que1__opt1">B</p>
                <div className="box1__input">
                  <input
                    type="text"
                    className="que1__input"
                    placeholder="Type Option Here"
                    onChange={props.inputEvent}
                    value={props.val.choice2}
                    name="choice2"
                  />
                </div>
                <img src={check1} alt="" className={tick.line2 == true ? "tick" : "qu1__img1"} onClick={() => { checkTick("line2") }} />
                <img src={close} alt="" className={tick.line2 == false ? "false" : "qu1__img1"} onClick={() => { checkTick("line2") }} />
              </div>
              <div className="box1__que1">
                <img src={menu} alt="" className="que1__img1" />
                <img src={redcross} alt="" className="que1__img2" />
                <p className="que1__opt1">C</p>
                <div className="box1__input">
                  <input
                    type="text"
                    className="que1__input"
                    placeholder="Type Option Here"
                    onChange={props.inputEvent}
                    value={props.val.choice3}
                    name="choice3"
                  />
                </div>
                <img src={check1} alt="" className={tick.line3 == true ? "tick" : "qu1__img1"} onClick={() => { checkTick("line3") }} />
                <img src={close} alt="" className={tick.line3 == false ? "false" : "qu1__img1"} onClick={() => { checkTick("line3") }} />
              </div>
              <div className="box1__bottom__inputs cursor">
                <div onClick={props.handleAddClick} className="inputs__btn">
                  <img src={greenadd} alt="" className="btn__img" />
                  <p className="btn__para">ADD KEYWORDS</p>
                </div>
                {
                  props.inputList.map((x, i) => {
                    return (
                      <div className="bottom__input1">
                        <input
                          type="text"
                          className="que1__input"
                          placeholder="Type Keyword Here"
                          onChange={e => props.handleInputChange(e, i)}
                          value={props.inputList.firstName}
                          name="firstName"
                        />
                      </div>
                    )
                  })
                }
                {/* <div className="bottom__input1">
                  <input
                    type="text"
                    className="que1__input"
                    placeholder="Type Keyword Here"
                    onChange={props.inputEvent}
                    value={props.val.key2}
                    name="key2"
                  />
                </div>
                <div className="bottom__input1">
                  <input
                    type="text"
                    className="que1__input"
                    placeholder="Type Keyword Here"
                    onChange={props.inputEvent}
                    value={props.val.key3}
                    name="key3"
                  />
                </div> */}
              </div>
            </div>
          </div>

          {
            allQues==null?
            <div className="loading"><CircularProgress /></div>:
            allQues.items?.map((data, index) => {

              if (data.questionType == "NUMERICAL_INPUT") {

                return (
                  <>
                    <NUMERICAL_INPUT total={allQues.totalElements} data={data} index={index} />
                  </>
                )
              }
              else if (data.questionType == "JUST_QUESTION") {
                return (
                  <>
                    <JUST_QUESTION total={allQues.totalElements} data={data} index={index} />
                  </>
                )
              }
              else if (data.questionType == "TRAFFIC_SIGN_QUESTION") {
                return (
                  <>
                    <TRAFFIC_SIGN_QUESTION total={allQues.totalElements} data={data} index={index} />
                  </>
                )

              }
              else if (data.questionType == "PICTURE_BASED_QUESTION") {
                return (
                  <>
                    <PICTURE_BASED_QUESTION total={allQues.totalElements} data={data} index={index} />
                  </>
                )
              }
              else {
                return (
                  <>
                    <VIDEO_QUESTION total={allQues.totalElements} data={data} index={index} />
                  </>
                )
              }
            })
          
          }
        </div>
      </div>
    </>
  );
};

export default Quiz;
