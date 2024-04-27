import {Table} from "react-bootstrap";
import {useRecoilValue} from "recoil";
import {forecastsState} from "../States/forecastsState";


const HomeForecastsTable = () => {

    const recoilForecasts = useRecoilValue(forecastsState);

    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>City</th>
                    <th>Country</th>
                    <th>Temperature</th>
                </tr>
            </thead>
            <tbody>
            {
                recoilForecasts.map( (forecast) => {
                    return (
                        <tr>
                            <td>{forecast.city}</td>
                            <td>{forecast.country}</td>
                            <td>{forecast.temperature}</td>
                        </tr>
                    );

                })
            }
            </tbody>
        </Table>
    )
};

export default HomeForecastsTable;