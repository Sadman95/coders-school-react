import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'


const MapBox = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FkbWFuMjEiLCJhIjoiY2t2MjZxc21iMDdmcDJwb2IzM2g3cHZqbyJ9.UPKZwjlHW8-Uf5a3epgaaw';
    useEffect(() =>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [91.8214208, 22.3661311],
            zoom: 13
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    }, [])

    return (
        <div>
            <h1 className='spanned'>Find Us</h1>
            <div id="map"></div>
        </div>
    );
};

export default MapBox;