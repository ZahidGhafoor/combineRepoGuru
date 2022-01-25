import axios from "../axiosInstance"



const getPins = async () => {
    let token = localStorage.getItem("guruToken")
    let resolved = {
        data: null,
        error: null

    };
    try {
        let res = await axios({
            url: "pins?page=0&size=12",
            method: "GET",
            headers: {
                Authorization: `Bearer Bearer ${token}`,
            },

        })
        if (res.data.totalElements != 0) {
            let allRes = await axios({
                url: `pins?page=0&size=${res.data.totalElements}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer Bearer ${token}`
                },

            })
            resolved.data = allRes.data
            console.log("total pins are=======", allRes)
        }
        else {
            resolved.data = res.data
            console.log("total pins are=======", res)
        }
    } catch (error) {
        if (error.response) {
            resolved.error = error.response.data.error;
        } else {
            resolved.error = 'Something went wrong';
        }

    }
    return resolved
}


const updatePin = async (val) => {
    let token = localStorage.getItem("guruToken")

    let resolved = {
        data: null,
        error: null


    }
    try {
        let res = await axios({
            url: `pins`,
            method: 'PUT',
            headers: {
                Authorization: `Bearer Bearer ${token}`
            },
            data: {
                "id": val.id,
                "period": parseFloat(val.number),
                "timeUnit": val.validity
            }
        })
        resolved.data = res.data

    } catch (error) {
        if (error.response) {
            resolved.error = error.response.data.error
        }
        else {
            resolved.error = 'Something went wrong'
        }

    }
    return resolved
}

export { getPins, updatePin }