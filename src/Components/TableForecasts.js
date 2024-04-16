
function TableForecasts({forecasts}) {

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