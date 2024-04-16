
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import TableForecasts from "./Components/TableForecasts";
import FormAddForecast from "./Components/FormAddForecast";
import {useState} from "react";

function App() {

    let [forecasts, setForecasts] = useState([
        {city: 'Aleksinac', country: 'Srbija', temperature: 21},
        {city: 'Beograd', country: 'Srbija', temperature: 22},
        {city: 'London', country: 'England', temperature: 15}
    ]);

    const handleFormSubmit = (newForecast) => {
        setForecasts(currentForecasts => [...currentForecasts, newForecast]);
    };

    return (
        <div className="container">
            <TableForecasts forecasts={forecasts}/>
            <hr/>
            <div className="col-md-4">
                <FormAddForecast onSubmit={handleFormSubmit} />
            </div>

            <hr/>

        </div>
    );
}

export default App;
