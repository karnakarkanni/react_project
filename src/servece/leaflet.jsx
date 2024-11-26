import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import { Icon, latLng, marker } from "leaflet";
import "leaflet-routing-machine";
import "../styles.css"


function Maps() {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Error fetching location:", error);
        }
      );
    }
  };
  const markers = [
    { geocode: [17.493559, 78.401049], name: "KPHB metro parking 2" },
    { geocode: [17.49381701389911, 78.40167110903306], name: "KPHB Metro Parking1" },
    { geocode: [17.493407708610082, 78.40402072408364], name: "chennai shopping mall parking" },
    { geocode: [17.485200121754275, 78.38924647917835], name: "Nesux mall parking" },
    { geocode: [17.486018768563582, 78.41121913487157], name: "kukatpally metro parking" },
    { geocode: [17.501405354941532, 78.38658989180439], name: "bramarambha cinema hall parking" },
    { geocode: [17.490989476734956, 78.39300605166709], name: "Lulu mall parking" }
  ];
  const customIcon = new Icon({
    iconUrl: "https://www.svgrepo.com/show/509483/parking.svg",
    iconSize: [38, 38],
  });
  useEffect(() => {
    getLocation();
  }, []);
  const onMarkerClick = (marker) => {
    setDestination(marker.geocode);
  };
  function RoutingControl() {
    const map = useMap();
    useEffect(() => {
      if (destination) {
        const route = L.Routing.control({
          waypoints: [
            latLng(location.latitude, location.longitude),
            latLng(destination[0], destination[1]),
          ],
        }).on('routesfound', function (e) {
          console.log(e)
          e.routes[0].coordinates.forEach(function (coord, index) {
            setTimeout(() => {
              marker.setLatlng([coord.lat, coord.lng])
            }, 100 * index)
          })
        }).addTo(map);
        return () => {
          map.removeControl(route);
        };
      }
    }, [map, destination, location]);
    return null;
  }
  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div id="map">
      <h1 style={{color:"white"}}>Map with User Location</h1>
      <button style={{width:200,height:50, backgroundColor:"red", color:""}}> <Link to={"/Service/Book"}>Book now</Link> </button>
      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={16}
        style={{ height: "100vh" }}
      >
        <Marker position={[location.latitude, location.longitude]} iconUrl={"https://www.svgrepo.com/show/513317/location-pin.svg"}>
          <Popup>Your Location</Popup>
        </Marker>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.geocode}
            icon={customIcon}
            eventHandlers={{
              click: () => onMarkerClick(marker),
            }}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
        <RoutingControl />
      </MapContainer>
      </div>
    </>
  );
}
export default Maps;



