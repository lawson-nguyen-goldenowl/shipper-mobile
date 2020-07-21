let apiKey = 'pk.eyJ1IjoibGF3c29ubmd1eWVuIiwiYSI6ImNrY29vZ3p0bTBkb2oycG9iaWR0Z3BmaWEifQ.vxBH2svrPtPPi4uXrbLheA'

const findDirections = async (source, destinations) => {
    try {
        console.log('Started Finding Directions...')
        let url = "https://api.mapbox.com/directions/v5/mapbox/driving/";

        let params = source + ";"
        destinations.map((destination, index) => {
            let location = destination.location.split(",")
            params += location[1] + ',' + location[0]
            if (index != destinations.length - 1) params += ";"
        })
        url += params + "?" + "alternatives=false&geometries=geojson&steps=false&access_token=" + apiKey
        let respond = await fetch(
            url
        ).then((res) => res.json());

        return respond

    } catch (error) {
        console.log('API FIND DIRECTIONS ERROR : ', error)
    }
}

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

const Maps = {
    findDirections
}

export default Maps