import "../Utilities/Utilits.css";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const INITIAL_ZOOM = 10.12;
export default function Map({ info }) {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const mapToken = import.meta.env.VITE_MAP_TOKEN;
  let coordinates = [info.lon, info.lat];
  console.log(coordinates);

  useEffect(() => {
    mapboxgl.accessToken = mapToken;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: coordinates,
      zoom: INITIAL_ZOOM,
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setCenter([info.lon, info.lat]);
    }
  }, [info.lon, info.lat]);
  return <div className="map" id="map-container" ref={mapContainerRef} />;
}
