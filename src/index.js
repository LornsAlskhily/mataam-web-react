import React from "react";  
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import { BrowserRouter , Routes, Route ,Navigate  } from "react-router-dom";


import Login from "./pages/LoginPage";
import Customer from "./pages/RestauransPage"; 
import Register from "./pages/RegisterPage"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element ={<Navigate to="/login" replace />}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/restaurans" element={<Customer/>}/>
    <Route path="/register" element={<Register/>}/>
  </Routes>
</BrowserRouter>
)