import React,{useState} from 'react';
import './map.styles.scss';
import MapGL, { Marker } from '@urbica/react-map-gl';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const MapComponent = () => {

    const [position,setPosition] = useState({
        longitude: 50,
        latitude: 50
    });

    const onDragEnd = (lnglat) => {
        setPosition({latitude: lnglat.lat, longitude: lnglat.lng})
        console.log(position);
    }
    const [viewport, setViewport] = useState({
        latitude: 37.78,
        longitude: -122.41,
        zoom: 11
      });

    return (
        <div class="map-container">
            <MapGL
            style={{ width: '100%', height: '100%' }}
            mapStyle='mapbox://styles/mapbox/light-v9'
            accessToken= "pk.eyJ1Ijoic2hyZXlkMTIzIiwiYSI6ImNrOG9yZHVscTA1MDYzZnRkY2VtcDd5MWYifQ.G5MQ9uSX90EDrzONZWQ8Hg"
            latitude={position.latitude}
            longitude={position.longitude}
            zoom={0}
            onViewportChange={setViewport}
            >
            <Marker
                longitude={position.longitude}
                latitude={position.latitude}
                onDragEnd={onDragEnd}
                draggable
            >
                <LocationOnIcon />
            </Marker>
            </MapGL>
        </div>
    )
}

export default MapComponent;