const host = "https://api-shippers-goldenowl.herokuapp.com/api/"

const login = async (email, password) => {
    try {
        let url = host + "login"
        console.log("START LOGIN");
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email,password})
        }).then((res) => res.json())
        return response
    } catch (error) {
        console.log('API LOGIN ERROR: ', error)
    }

}

const signup = async (data) => {
    try {
        let url = host + 'register'
        console.log("START SIGN UP")
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({data})
        }).then((res) => res.json())
        return response
    } catch (error) {
        console.log('API SIGN UP ERROR :', error)
    }
}

const apiUser = {
    login,
    signup
}

export default apiUser