import React, { useEffect, useState } from "react";
import "./QuizPage.scss";
import Quiz from "../Admin/Quiz/Quiz";
import QuizSideBar from "../Admin/Quiz/QuizSideBar";
import Header from "../Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// API
import { postQuestion, questionConfig } from "../../Api/question";

const QuizPage = () => {


  const [val, setVal] = useState({
    question: "",
    subQuestion: "",
    choice1: "",
    choice2: "",
    choice3: "",
    key1: "",
    key2: "",
    key3: "",
    remarks: "",
    help: "",
  })
  const [inputList, setInputList] = useState([]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    // list[index][name] = value;
    list[index] = value;
    setInputList(list);

  };

  // handle click event of the Add button
  const handleAddClick = () => {
    // setInputList([...inputList, { firstName: "" }]);
    setInputList([...inputList, ""]);
  };
  const inputEvent = (event) => {
    const { value, name } = event.target;
    setVal((pValue) => {
      return {
        ...pValue,
        [name]: value,
      }
    })
  }

  console.log("value============", val)


  const [lang, setLang] = useState(1);
  const [config, setConfig] = useState();

  const [cat, setCat] = useState(null)
  const [chap, setChap] = useState(null)
  const [exeptional, setExceptional] = useState(null)
  const [license, setLicense] = useState(null)
  const [ques, setQues] = useState(null)
  const [types, setTypes] = useState(null)

  const [sideoptions, setSideoptions] = useState({
    type: null,
    except: null,
    chapter: null,
    question: null,
    licen: null,
    categories: null,
    subCategory: null,
    questionNumber: null,
    point: null,
    image1: null,
    image2: null,
    video: null,
  })


  console.log("sideoptions are=========", sideoptions)





  useEffect(async () => {
    let res = await questionConfig();
    if (res.error != null) {
      console.log("Something went wrong");
    } else {
      setConfig(res.data);
      setCat(res.data.categories)
      setChap(res.data.chapters)
      setExceptional(res.data.exceptionalQuestions)
      setLicense(res.data.licenceClasses)
      setQues(res.data.questionClasses)
      setTypes(res.data.questionTypes)

    }
  }, []);

  const save = async () => {
    let res = await postQuestion(val, sideoptions, inputList);
    if (res.error != null) {
      console.log("post Question error======", res.error)
      toast.error('Something went wrong', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
    else {
      console.log("post question are ======================", res.data)
      toast.success('Question Posted Sunccessfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    console.log("post question =====", res)

  }


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="header__component">
        <Header />
      </div>
      <div className="qp__container">
        <Quiz lang={lang} setLang={setLang} save={save} val={val} inputList={inputList} handleInputChange={handleInputChange} handleAddClick={handleAddClick} inputEvent={inputEvent} />
        <QuizSideBar
          lang={lang} setLang={setLang} cat={cat} chap={chap} exceptional={exeptional} license={license} ques={ques} types={types} val={val} inputEvent={inputEvent} sideoptions={sideoptions} setSideoptions={setSideoptions}
        />
      </div>
    </>
  );
};

export default QuizPage;
