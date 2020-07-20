import React, { useEffect } from "react";
import {
    View,
    StyleSheet
} from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken("pk.eyJ1IjoibGF3c29ubmd1eWVuIiwiYSI6ImNrY29vZ3p0bTBkb2oycG9iaWR0Z3BmaWEifQ.vxBH2svrPtPPi4uXrbLheA");

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
});

const App = () => {

    useEffect(() => {
        MapboxGL.setTelemetryEnabled(false);

    }, [])
    return (
        <MapboxGL.MapView
            style={styles.page}
            showUserLocation={true}
        >
            <MapboxGL.Camera
                zoomLevel={12}
                centerCoordinate={[106.6673794, 10.7857855]} />
            <MapboxGL.PointAnnotation
                id='asd'
                coordinate={[106.6673794, 10.7857855]}
            />
            <MapboxGL.ShapeSource
                id='line1'
                width={5}
                height={5}
                shape={{
                    type: 'LineString',
                    coordinates: [
                        [106.6822082, 10.7613494],
                        [106.6673794, 10.7857855]
                    ]
                }}
            >
                <MapboxGL.LineLayer id='linelayer1' style={{ lineColor: 'red' }} />

            </MapboxGL.ShapeSource>
        </MapboxGL.MapView >
    )
}

export default App