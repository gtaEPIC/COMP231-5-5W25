import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Login from "./pages/Login";
import Main from "./components/Main";
import Tickets from "./components/Tickets";
import AddTicket from "./components/AddTicket";
import View from "./components/View";
import UpdateTicket from "./components/UpdateTicket";
import Profile from "./components/Profile"; 
import Signup from "./pages/Signup";
import Users from "./pages/Users";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/*"
                    element={
                        <>
                            <Header />
                            <Routes>
                                <Route index element={<Main />} />
                                <Route path="/tickets/new" element={<AddTicket />} />
                                <Route path="/tickets/:id/edit" element={<UpdateTicket />} />
                                <Route path="/tickets/:id" element={<View />} />
                                <Route path="/tickets/" element={<Tickets />} />
                                <Route path="/login/" element={<Login />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/signup" element={<Signup />} />
                                <Route path="/users" element={<Users />} />
                                <Route path="*" element={<App />} />
                            </Routes>
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
