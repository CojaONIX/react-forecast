import Navigation from "../Templates/Snippets/Navigation";
import {useState} from "react";
import axios from "axios";


const FindPlace = () => {

    const [geoLatitude, setGeoLatitude] = useState('');
    const [geoLongitude, setGeoLongitude] = useState('');

    const [nominatimResponse, setNominatimResponse] = useState({});

    const findPlace = () => {
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${geoLatitude}4&lon=${geoLongitude}&format=json`;
        console.log(url);
        axios.get(url)
            .then(response => {
                setNominatimResponse(response);
            })
            .catch(error => {
                setNominatimResponse(error);
            });
    }

    const getAddress = (location) => {
        if(geoLatitude === '' && geoLongitude === '') {
            setGeoLatitude(location.coords.latitude.toString());
            setGeoLongitude(location.coords.longitude.toString());
        }
    }

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getAddress, () => console.log("addressForbidden"));
    } else {
        console.log("not supported geolocation");
    }

    return (
        <>
            <Navigation/>
            <div className="container">
                <h1>Find Place by lat-long</h1>
                <hr/>
                <h4>Latitude: {geoLatitude}</h4>
                <h4>Longitude: {geoLongitude}</h4>
                <input onChange={(e) => setGeoLatitude(e.currentTarget.value)} value={geoLatitude}/>
                <input onChange={(e) => setGeoLongitude(e.currentTarget.value)} value={geoLongitude}/>
                <button onClick={findPlace} type="button">Find Place</button>
                <pre>{JSON.stringify(nominatimResponse, null, 4)}</pre>
            </div>
        </>
    );
}

export default FindPlace;