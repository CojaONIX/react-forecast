

import Navigation from "../Templates/Snippets/Navigation";
import HomeForecastsTable from "../Components/HomeForecastsTable";

const Home = () => {



    return (
        <>
            <Navigation/>
            <div className="container" style={{marginBottom: "500px"}}>
                <h1>Home</h1>
                <hr/>
                <HomeForecastsTable/>
            </div>
        </>
    );
}

export default Home;