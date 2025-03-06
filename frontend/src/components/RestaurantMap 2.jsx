import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Configuration des icônes Leaflet
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
    shadowPopupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

const RestaurantMap = ({ restaurants, onRestaurantSelect }) => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <MapContainer
                center={[48.8566, 2.3522]} // Paris
                zoom={13}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {restaurants.map((restaurant) => (
                    <Marker
                        key={restaurant.id}
                        position={[restaurant.latitude, restaurant.longitude]}
                        eventHandlers={{
                            click: () => onRestaurantSelect(restaurant)
                        }}
                    >
                        <Popup>
                            <div>
                                <h3>{restaurant.name}</h3>
                                <p>{restaurant.address}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default RestaurantMap; 