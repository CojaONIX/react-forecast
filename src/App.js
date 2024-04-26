
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import {RecoilRoot} from "recoil";
import {Login} from "./Components/Login";

const App = () => {

    return (
        <BrowserRouter>
            <Login />
            <RecoilRoot>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;
