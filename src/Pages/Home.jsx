
import {useForm} from "react-hook-form";

const Home = () => {

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