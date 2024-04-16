

function FormAddForecast() {
    return (
        <>
            <h2>Add Forecast:</h2>
            <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city"/>
            </div>
            <div className="mb-3">
                <label htmlFor="country" className="form-label">Country</label>
                <input type="text" className="form-control" id="country"/>
            </div>
            <div className="mb-3">
                <label htmlFor="temperature" className="form-label">Temperature</label>
                <input type="number" className="form-control" id="temperature"/>
            </div>

            <button className="btn btn-primary">Add Forecast</button>
        </>
    )
}

export default FormAddForecast;