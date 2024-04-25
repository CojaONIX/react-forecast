
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
