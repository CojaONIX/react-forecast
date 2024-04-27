
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import {RecoilRoot} from "recoil";
import {Login} from "./Pages/Login";
import Footer from "./Templates/Snippets/Footer";

const App = () => {

    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
