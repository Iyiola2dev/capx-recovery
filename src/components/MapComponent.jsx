import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS for proper map styling

const MapComponent = () => {
  const position = [32.3318, -90.2499]; // Jackson, MS coordinates

  return (
    <div className="flex justify-center items-center bg-gray-100 h-full w-full">
      <div className="w-full max-w-[500px] h-[400px] p-4 rounded-lg shadow-md">
        <MapContainer
          center={position}
          zoom={13}
          className="h-full w-full" // Ensure full width and height
          scrollWheelZoom={false} // Disable scroll wheel zoom
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={position}>
            <Popup>
              5551, Shaw RD, Apt no 16/188, Jackson, MS – 39209
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
