import React, {useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import Navigation from "../Templates/Snippets/Navigation";
import HomeForecastsTable from "../Components/HomeForecastsTable";

const Home = () => {

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

    //------------------------------------------------------------------------------------------
    const validCities = ['Beograd', 'Subotica', 'Novi Sad', 'Aleksinac', 'Smederevo'];

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onFormSubmit = (data) => {
        console.log(data);
    };

    const isValidCityName = (city) => validCities.includes(city);


    return (
        <>
            <Navigation/>

            <div className="container">
                <h1>Home</h1>
                <hr/>
                <HomeForecastsTable/>
                <hr/>
                <h4>Latitude: {geoLatitude}</h4>
                <h4>Longitude: {geoLongitude}</h4>
                <input onChange={(e) => setGeoLatitude(e.currentTarget.value)} value={geoLatitude}/>
                <input onChange={(e) => setGeoLongitude(e.currentTarget.value)} value={geoLongitude}/>
                <button onClick={findPlace} type="button">Find Place</button>
                <pre>{JSON.stringify(nominatimResponse, null, 4)}</pre>

                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City:</label>
                        <input
                            {...register('cityName', {
                                validate: isValidCityName
                            })}
                            type="text"
                            className="form-control"
                            id="city"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Home;