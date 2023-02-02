import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import React from "react";

import Home from "./components/Home/Home";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
