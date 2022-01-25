import axios from "././../axiosInstance"




const questionConfig = async () => {
    const token = localStorage.getItem("guruToken")


    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: `questions/configs?lang=en`,
            method: "GET",
            headers: {
                Authorization: `Bearer Bearer ${token}`
            },

        })
        resolved.data = res.data
    } catch (error) {
        if (error.response) {
            resolved.error = error.response.data.error;
        } else {
            resolved.error = "Something went wrong"
        }

    }
    return resolved
}

const postQuestion = async (val, sideoptions, inputList) => {
    const token = localStorage.getItem("guruToken")

    console.log("coming data=======", val, sideoptions)
    let resolved = {
        error: null,
        data: null
    }
    try {
        let res = await axios({
            url: `questions`,
            method: "POST",
            headers: {
                Authorization: `Bearer Bearer ${token}`
            },
            data: {
                categoryId: sideoptions.categories.id,
                chapterId: sideoptions.chapter.id,
                choices: [
                    {
                        title: val.choice1,
                        valid: true
                    },
                    {
                        title: val.choice2,
                        valid: false
                    },
                    {
                        title: val.choice3,
                        valid: true
                    },
                ],
                classId: sideoptions.question.id,
                exceptionalQuestionId: sideoptions.except.id,
                help: val.help,
                image1: sideoptions.image1,
                image2: sideoptions.image2,
                keywords: inputList,
                languageCode: "en",
                licenceClassId: sideoptions.licen.id,
                point: sideoptions.point.point,
                questionNumberId: sideoptions.questionNumber.id,
                questionTitle: val.question,
                questionType: sideoptions.type,
                remarks: val.remarks,
                subCategoryId: sideoptions.subCategory.id,
                subQuestionTitle: val.subQuestion,
                video: sideoptions.video
            }
        });
        resolved.data = res.data
    } catch (error) {
        console.log("p error", error)
        if (error.response) {
            resolved.error = error.response.data.error;
        } else {
            resolved.error = "Something went wrong"
        }

    }
    return resolved
}


const getQuestion = async () => {
    const token = localStorage.getItem("guruToken")

    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: `questions?page=0&size=10&lang=en`,
            method: "GET",
            headers: {
                Authorization: `Bearer Bearer ${token}`
            },
        })

        let allRes = await axios({
            url: `questions?page=0&size=${res.data.totalElements}&lang=en`,
            method: "GET",
            headers: {
                Authorization: `Bearer Bearer ${token}`
            },

        })
        if (res.data.totalElements == 0) {
            resolved.data = res.data
            console.log("total question are=======", res)
        }
        else {
            resolved.data = allRes.data
            console.log("total questions are=======", allRes)
        }

    } catch (error) {
        if (error.response) {
            resolved.error = error.response.data.error
        }
        else {
            resolved.error = "Something went wrong"
        }


    }
    return resolved
}



export { questionConfig, postQuestion, getQuestion }

