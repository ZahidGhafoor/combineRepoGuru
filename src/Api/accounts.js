import axios from "../axiosInstance"


const getStudents = async () => {
    let token = localStorage.getItem("guruToken")
    let resolved = {
        data: null,
        error: null
    }

    try {
        let res = await axios({
            url: "accounts/accounts/students?page=1&size=30",
            method: "GET",
            headers: {
                Authorization: `Bearer Bearer ${token}`
            },

        })
        let allRes = await axios({
            url: `accounts/accounts/students?page=0&size=${res.data.totalElements}`,
            method: "GET",
            headers: {
                Authorization: `Bearer Bearer ${token}`
            },

        })
        resolved.data = allRes.data
        console.log("total accounts are=======", allRes)
    } catch (error) {
        if (error.response) {
            resolved.error = error.response.data.error;
        } else {
            resolved.error = 'Something went wrong';
        }

    }
    return resolved
}

const getAccount = async () => {
    let token = localStorage.getItem("guruToken")
    let email = localStorage.getItem("guruEmail")
    let resolved = {
        error: null,
        data: null
    }
    try {
        let res = await axios({
            url: `http://95.217.129.143:8081/accounts/${email}`,
            method: "GET",
            headers: {
                Authorization: `Bearer Bearer ${token}`

            },
        })
        resolved.data = res.data
        console.log("email===||||||||||||||||||||", res.data);
    } catch (error) {
        if (error.response) {
            resolved.error = error.response.data.error;
        } else {
            resolved.error = 'Something went wrong';
        }

    }
    return resolved

}

export { getStudents, getAccount }