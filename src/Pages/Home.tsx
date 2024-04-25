
import React from "react";
import {useForm} from "react-hook-form";

const Home = (): JSX.Element => {

    const getAddress = (location: GeolocationPosition) => {
        console.log(location.coords);
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