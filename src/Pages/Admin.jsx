import {useState} from "react";
import Navigation from "../Templates/Snippets/Navigation";
import {Navigate} from "react-router-dom";

import {useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "../States/userState";
import {forecastsState} from "../States/forecastsState";

const Admin = () => {

    const [newForecast, setNewForecast] = useState({city: '', country: '', temperature: ''});
    const [cityMessage, setCityMessage] = useState('');

    const userStateData = useRecoilValue(userState);
    const recoilForecasts = useRecoilValue(forecastsState);
    const setRecoilForecasts = useSetRecoilState(forecastsState);

    const handleCityInput = (e) => {
        setNewForecast({...newForecast, city: e.target.value});
        setCityMessage( e.target.value === '' ? ' - Naziv grada je obavezan!' : '');
    }

    const deleteForecast = (indexToRemove) => {
        setRecoilForecasts(recoilForecasts.filter((_, index) => index !== indexToRemove));
    }

    const editForecast = (indexToEdit) => {
        setNewForecast(recoilForecasts[indexToEdit]);
        setCityMessage('');
    }

    const saveForecast = () => {

        if(newForecast.city === '') {
            setCityMessage(' - Naziv grada je obavezan!');
            return;
        }

        const saveItem = (newForecast.city + newForecast.country).toLowerCase();
        let addItem = true;

        const updatedForecast = recoilForecasts.map((item) => {
            if ((item.city + item.country).toLowerCase() === saveItem) {
                addItem = false;
                return newForecast;
            } else {
                return item;
            }
        });

        if(addItem) {
            setRecoilForecasts([...recoilForecasts, newForecast]);
        } else {
            setRecoilForecasts(updatedForecast);
        }
        console.log(recoilForecasts);

        setNewForecast({city: '', country: '', temperature: ''});

    }


    return (
        <>
            {userStateData.isLogged ?
                <>
                    <Navigation/>
                    <div className="container">
                        <h1>Forecast List:</h1>

                        <table className="table">
                            <thead>
                            <tr>
                                <th>City</th>
                                <th>Country</th>
                                <th>Temperature</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                recoilForecasts.map(function (forecast, index) {
                                    return (
                                        <tr key={'forecast-' + index}>
                                            <td>{forecast.city}</td>
                                            <td>{forecast.country}</td>
                                            <td>{forecast.temperature}</td>
                                            <td>
                                                <button onClick={() => deleteForecast(index)}
                                                        className="btn btn-outline-danger mx-3">D
                                                </button>
                                                <button onClick={() => editForecast(index)}
                                                        className="btn btn-outline-primary mx-3">E
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })

                            }
                            </tbody>
                        </table>

                        <hr/>

                        <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="city" className="form-label">City{cityMessage}</label>
                                <input onChange={handleCityInput}
                                       type="text"
                                       className="form-control"
                                       id="city"
                                       name="city"
                                       value={newForecast.city}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">Country</label>
                                <input
                                    onChange={(e) => setNewForecast({...newForecast, country: e.target.value})}
                                    type="text"
                                    className="form-control"
                                    id="country"
                                    name="country"
                                    value={newForecast.country}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="temperature" className="form-label">Temperature</label>
                                <input
                                    onChange={(e) => setNewForecast({
                                        ...newForecast,
                                        temperature: parseInt(e.target.value)
                                    })}
                                    type="number"
                                    className="form-control"
                                    id="temperature"
                                    name="temperature"
                                    value={newForecast.temperature}
                                />
                            </div>

                            <button onClick={() => setNewForecast({city: '', country: '', temperature: ''})}
                                    className="btn btn-outline-primary me-3">C
                            </button>
                            <button onClick={saveForecast} className="btn btn-primary">Save Forecast</button>
                        </div>

                        <hr/>

                        <p>{JSON.stringify(newForecast)}</p>
                    </div>
                </>
                : <Navigate to="/login" replace/>
            }
        </>
    );
}

export default Admin;