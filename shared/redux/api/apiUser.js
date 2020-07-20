import { request } from "./client";

const authentication = async (action , data) => {
    let url = action
    let config = {
        method: "POST",
        payload: data
    }
    
    let response = await request(url, config)
    return response
}
const login = (email, password) => authentication('login', {email, password})
const signup = (info) => authentication('register', info)

const checkToken = async token => {
    try {
        let config = {
            headers : {
                Authorization: `Bearer ${token}`
            }
        }
        let response = await request('details', config)
        return response
    } catch (error) {
        
    }
}

const apiUser = {
    login,
    signup,
    checkToken
}

export default apiUser