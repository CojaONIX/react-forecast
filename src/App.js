
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import FormAddForecast from "./Components/FormAddForecast";
import {useState} from "react";
import TableForecasts from "./Components/TableForecasts";

function App() {
    let [forecasts, setForecasts] = useState([{city: 'Aleksinac', country: 'Srbija', temperature: 20}]);

    return (
        <div className="container">
            <TableForecasts/>
            <hr/>
            <div className="col-md-4">
                <FormAddForecast/>
            </div>

            <hr/>

        </div>
    );
}

export default App;
