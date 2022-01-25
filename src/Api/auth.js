import axios from "../axiosInstance"

const login = async (val) => {
    let resolved = {
        error: null,
        data: null

    }

    try {
        let res = await axios({
            url: `auth/login`,
            method: "POST",
            data: {
                "password": val.pass,
                "userName": val.name

            }
        })
        resolved.data = res.data

    } catch (error) {
        resolved.error = "Something went wrong"

    }

    return resolved

}

// ######################################################################################################


const forgotPassStart = async (forgotPass) => {
    let resolved = {
        error: null,
        data: null
    }
    try {
        let res = await axios({
            url: `auth/forget-password-start`,
            method: "POST",
            data: {
                "email": forgotPass.forgotEmail

            }
        })
        resolved.data = res.data
    } catch (error) {
        resolved.error = "Something went wrong"

    }
    return resolved
}



export { login, forgotPassStart }