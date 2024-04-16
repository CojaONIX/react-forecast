
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import FormAddForecast from "./Components/FormAddForecast";
import {useState} from "react";
import TableForecasts from "./Components/TableForecasts";

function App() {

    let [forecasts, setForecasts] = useState([
        {city: 'Aleksinac', country: 'Srbija', temperature: 20},
        {city: 'Beograd', country: 'Srbija', temperature: 22},
        {city: 'London', country: 'England', temperature: 15}
    ]);

    return (
        <div className="container">
            <TableForecasts forecasts={forecasts}/>
            <hr/>
            <div className="col-md-4">
                <FormAddForecast/>
            </div>

            <hr/>

        </div>
    );
}

export default App;
