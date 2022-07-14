import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from "./components/home-components/Homepage";
import Homepage2 from "./components/home-components/Homepage2";
import Homepage3 from "./components/home-components/Homepage3";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/pages-components/Blog";
import BlogSingle from "./components/pages-components/BlogSingle";
import Career from "./components/pages-components/Career";
import Error404 from "./components/pages-components/Error404";
import FAQ from "./components/pages-components/FAQ";
import Privacy from "./components/pages-components/Privacy";
import SingIn from "./components/pages-components/SingIn";
import SingUp from "./components/pages-components/SingUp";
import Team from "./components/pages-components/Team";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/homepage2" element={<Homepage2/>}/>
                    <Route path="/homepage3" element={<Homepage3/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/blog-single" element={<BlogSingle/>}/>
                    <Route path="/career" element={<Career/>}/>
                    <Route path="/error" element={<Error404/>}/>
                    <Route path="/FAQ" element={<FAQ/>}/>
                    <Route path="/privacy" element={<Privacy/>}/>
                    <Route path="/sing-in" element={<SingIn/>}/>
                    <Route path="/sing-up" element={<SingUp/>}/>
                    <Route path="/team" element={<Team/>}/>
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
