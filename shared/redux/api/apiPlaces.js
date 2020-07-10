import { request } from './client'

const getAllPlaces = async () => { 
    let response = await request('places')
    return response
};

const apiPlaces = {
    getAllPlaces
}

export default apiPlaces