import React, {useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

const Home = (): JSX.Element => {

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

    const getAddress = (location: GeolocationPosition) => {
        setGeoLatitude(location.coords.latitude.toString());
        setGeoLongitude(location.coords.longitude.toString());
    }

    const addressForbidden = () => {
        console.log("addressForbidden");
    }

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getAddress, addressForbidden)
    } else {
        console.log("not supported geolocation");
    }


    const validCities: string[] = ['Beograd', 'Subotica', 'Novi Sad', 'Aleksinac', 'Smederevo'];

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onFormSubmit = (data: object): void => {
        console.log(data);
    };

    const isValidCityName = (city: string) => validCities.includes(city);


    return (
        <div className="container">
            <h1>Home</h1>
            <hr/>
            <h4>Latitude: {geoLatitude}</h4>
            <h4>Longitude: {geoLongitude}</h4>
            {/*<input onChange={(e) => setGeoLatitude(e.currentTarget.value)} />*/}
            {/*<input onChange={(e) => setGeoLongitude(e.currentTarget.value)} />*/}
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
    );
}

export default Home;