import { request } from "./client";

const authentication = async (action , data) => {
    console.log(data);
    
    let url = action
    let config = {
        method: "POST",
        payload: data
    }
    
    let response = await request(url, config)
    console.log(response)
    return response
}
const login = (email, password) => authentication('login', {email, password})
const signup = (info) => authentication('register', info)

const checkToken = async token => {
    try {
        let url = host + 'details'
    } catch (error) {
        
    }
}

const apiUser = {
    login,
    signup
}

export default apiUser