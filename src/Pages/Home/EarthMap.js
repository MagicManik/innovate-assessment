import React from 'react';
import { Circle, LayerGroup, MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const EarthMap = () => {
    return (
        <div className='border-2 border-[#F8F8F8] rounded-xl overflow-hidden'>
            <div className="w-full">
                <MapContainer center={[23.82321, 90.41912]} zoom={15} style={{ height: '186px', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LayerGroup>
                        <Circle
                            center={[23.82321, 90.41912]}
                            pathOptions={{ color: 'green', fillColor: 'green' }}
                            radius={50}
                        />
                    </LayerGroup>
                    <Marker position={[23.82321, 90.41912]}>
                        <Tooltip>Bd Car Parts</Tooltip>
                    </Marker>
                </MapContainer>
            </div>
            <div>
                <p className='text-[#2C2827] text-center py-7'>View in a map</p>
            </div>
        </div>
    )
}
export default EarthMap;