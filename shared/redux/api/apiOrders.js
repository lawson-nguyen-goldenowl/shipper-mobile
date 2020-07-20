import { request } from "./client";
const getAll = async (token) => {
    try {
        console.log("Started fetching...")
        let config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        let response = await request('orders', config)
        console.log('Recived Respond')
        return response
    } catch (error) {
        console.log('API ALL ORDER ERROR: ', error)
    }
}

const Orders = {
    getAll
}

export default Orders