import axios from "../axiosInstance"


const sendNotify = async (val) => {
    let token = localStorage.getItem("guruToken")

    let resolved = {
        error: null,
        data: null

    }

    try {
        let res = await axios({
            url: `notifications`,
            method: "POST",
            headers: {
                Authorization: `Bearer Bearer ${token}`
            },
            data: {
                message: val.msg,
                type: val.type
                // "type": val.type
            }
        })
        resolved.data = res.data

    } catch (error) {
        resolved.error = "Something went wrong"

    }

    return resolved

}

const getNotify = async () => {

    let token = localStorage.getItem("guruToken")

    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: `notifications?page=0&size=23`,
            method: "GET",
            headers: {
                Authorization: `Bearer Bearer ${token}`
            },

        })

       let allRes = await axios({
            url: `notifications?page=0&size=${res.data.totalElements}`,
            method: "GET",
            headers: {
                Authorization: `Bearer Bearer ${token}`
            },

        })
        if (res.data.totalElements == 0) {
            resolved.data = res.data
            console.log("total notificaitons are=======", res)
        }
        else {
            resolved.data = allRes.data
            console.log("total notificaitons are=======", allRes)
        }
    } catch (error) {

        if (error.response) {
            resolved.error = error.response.data.error;
        } else {
            resolved.error = "Something went wrong"
        }

    }
    return resolved


}
const deleteNotify = async (val) => {

    let token = localStorage.getItem("guruToken")

    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: `notifications/${val}`,
            method: "DELETE",
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

export { sendNotify , getNotify ,deleteNotify }