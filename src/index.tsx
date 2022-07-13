import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from "./components/home-components/Homepage";
import Homepage2 from "./components/home-components/Homepage2";
import Homepage3 from "./components/home-components/Homepage3";
import Home from "./components/Home";
import Pages from "./components/Pages";
import About from "./components/About";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/home" element={<Home/>}>
                        <Route path="/homepage" element={<Homepage/>}/>
                        <Route path="/homepage2" element={<Homepage2/>}/>
                        <Route path="/homepage3" element={<Homepage3/>}/>
                    </Route>
                    <Route path="/pages" element={<Pages/>}>

                    </Route>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
