import {useForm} from "react-hook-form";
import Navigation from "../Templates/Snippets/Navigation";
import {useState} from "react";


const CitiesValidation = () => {

    const validCities = ['Beograd', 'Subotica', 'Novi Sad', 'Aleksinac', 'Smederevo'];

    const [message, setMessage] = useState('');

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onFormSubmit = (data) => {
        console.log(data);
        setMessage(data.cityName + ' is valid city');
    };

    const isValidCityName = (city) => validCities.includes(city);

    return (
        <>
            <Navigation/>

            <div className="container">
                <h4>Valid Cities: 'Beograd', 'Subotica', 'Novi Sad', 'Aleksinac', 'Smederevo'</h4>
                <h5>Press ENTER for validate</h5>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City:</label>
                        <input
                            {...register('cityName', {
                                validate: isValidCityName
                            })}
                            onInput={() => setMessage('')}
                            type="text"
                            className="form-control"
                            id="city"
                        />
                    </div>
                </form>
                <h4>{message}</h4>
            </div>
        </>
    )
};

export default CitiesValidation;