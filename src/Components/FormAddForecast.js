
import { useState } from "react";

function FormAddForecast({ onSubmit }) {

    let [newForecast, setNewForecast] = useState({city: '', country: '', temperature: ''});

    const handleSubmit = () => {
        onSubmit(newForecast);
    };

    return (
        <>
            <h2>Add Forecast:</h2>
            <p>{ JSON.stringify(newForecast) }</p>
            <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input onChange={(e) => setNewForecast({ ...newForecast, city: e.target.value })}
                       type="text"
                       className="form-control"
                       id="city"
                       name="city"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="country" className="form-label">Country</label>
                <input
                    onChange={(e) => setNewForecast({ ...newForecast, country: e.target.value })}
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="temperature" className="form-label">Temperature</label>
                <input
                    onChange={(e) => setNewForecast({ ...newForecast, temperature: parseInt(e.target.value) })}
                    type="number"
                    className="form-control"
                    id="temperature"
                    name="temperature"
                />
            </div>

            <button onClick={handleSubmit} className="btn btn-primary">Add Forecast</button>
        </>
    )
}

export default FormAddForecast;