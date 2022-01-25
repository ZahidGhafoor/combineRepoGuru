import axios from "../axiosInstance";


const getPricing = async () => {
    let token = localStorage.getItem("guruToken")


    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: `pricing`,
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
            resolved.error = "Something went wrong";
        }
    }
    return resolved
}

const updatePricing = async (val) => {
    let token = localStorage.getItem("guruToken")



    let resolved = {
        error: null,
        data: null
    }

    try {
        let res = await axios({
            url: `pricing`,
            method: "PUT",
            headers: {
                Authorization: `Bearer Bearer ${token}`
            },
            data: {
                ...val
            }

        })
        resolved.data = res.data
    } catch (error) {
        if (error.response) {
            resolved.error = error.response.data.error;
        } else {
            resolved.error = "Something went wrong";
        }
    }
    return resolved
}

export { getPricing, updatePricing }