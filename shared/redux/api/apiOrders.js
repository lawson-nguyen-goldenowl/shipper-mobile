const host = "https://api-shippers-goldenowl.herokuapp.com/api/"

const showAll = async (token) => {
    try {
        let url = host + "orders"
        let response =  await fetch(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        let json =  await response.json()
        return json.success.data
    } catch (error) {
        console.log('API ALL ORDER ERROR: ', error)
    }
}

const Orders = {
    showAll
}

export default Orders