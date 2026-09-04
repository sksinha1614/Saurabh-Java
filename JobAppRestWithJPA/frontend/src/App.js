import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import Contact from "./pages/Contact";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddJob />} />
                <Route path="/edit" element={<EditJob />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;