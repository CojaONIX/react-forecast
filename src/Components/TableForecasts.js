import {useState} from "react";


function TableForecasts() {
    let [forecasts, setForecasts] = useState([
        {city: 'Aleksinac', country: 'Srbija', temperature: 20},
        {city: 'Beograd', country: 'Srbija', temperature: 22}
    ]);

    return (
        <>
            <h1>Forecast List:</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Country</th>
                        <th>Temperature</th>
                    </tr>
                </thead>
                <tbody>
                {
                    forecasts.map(function(forecast) {
                        return  <tr>
                                    <td>{forecast.city}</td>
                                    <td>{forecast.country}</td>
                                    <td>{forecast.temperature}</td>
                                </tr>
                    })

                }
                </tbody>
            </table>
        </>
    )
}

export default TableForecasts;