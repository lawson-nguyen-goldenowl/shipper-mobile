import React, { useEffect, useState } from "react";
import apiMap from 'apis/apiMap'
import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken("pk.eyJ1IjoibGF3c29ubmd1eWVuIiwiYSI6ImNrY29vZ3p0bTBkb2oycG9iaWR0Z3BmaWEifQ.vxBH2svrPtPPi4uXrbLheA")

const middlePoint = (orders) => {
    let orderFarest = orders[orders.length - 1]
    let locationOF = orderFarest.location.split(",")
    let x = (106.6673794 + parseFloat(locationOF[1]) ) / 2
    let y = (10.7857855 + parseFloat(locationOF[0])) / 2
    return [x,y]
}


const ShowPoints = ({ data }) => {
    let result = []
    data.map((order, index) => {
        let location = order.location.split(",")
        result.push(
            <MapboxGL.PointAnnotation
                title={"Order " + index}
                key={order.id.toString()}
                id={order.id.toString()}
                coordinate={[parseFloat(location[1]), parseFloat(location[0])]}
            >
            </MapboxGL.PointAnnotation>

        )
    })
    return result
}

const Maps = ({ data }) => {

    const [routes, setRoutes] = useState([])
    useEffect(() => {
        MapboxGL.setTelemetryEnabled(false);
        apiMap.findDirections("106.6673794, 10.7857855", data).then((res) => {
            setRoutes(res.routes[0].geometry.coordinates);
        })
    }, [])

    return (
        <MapboxGL.MapView
            style={{ flex: 1 }}
            showUserLocation={true}
        >
            <MapboxGL.Camera
                zoomLevel={12}
                centerCoordinate={middlePoint(data)} />

            <MapboxGL.PointAnnotation
                snippet="Kho"
                title="Kho"
                id='kho'
                coordinate={[106.6673794, 10.7857855]}
            >
            </MapboxGL.PointAnnotation>

            <ShowPoints data={data} />

            <MapboxGL.ShapeSource
                id='line1'
                shape={{
                    type: 'LineString',
                    coordinates: routes
                }}
            >
                <MapboxGL.SymbolLayer 
                sourceID='line1'
                />
                <MapboxGL.LineLayer id='linelayer1' style={{ lineWidth: 4, lineColor: 'green' }} />
            </MapboxGL.ShapeSource>
        </MapboxGL.MapView >
    )
}

export default Maps