import "../Utilities/Utilits.css";

const ZOOM = 10;
const WIDTH = 250;
const HEIGHT = 250;

export default function Map({ info }) {
  const mapToken = import.meta.env.VITE_MAP_TOKEN;

  if (!info?.lon || !info?.lat) return null;

  const mapUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/` +
    `${info.lon},${info.lat},${ZOOM}/` +
    `${WIDTH}x${HEIGHT}` +
    `?access_token=${mapToken}`;

  return (
    <div className="map">
      <img
        src={mapUrl}
        alt="Location map"
        className="map-image"
        loading="lazy"
      />
    </div>
  );
}

