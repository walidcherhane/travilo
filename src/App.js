import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import "@animxyz/core";
import {Home, Tours, Contact, About, SingleTour} from "./Routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loader from "./Routes/utils/Loader";
import {ToursProvider} from "./contexts/ToursContext";
import ToursByCity from "./Routes/ToursByCity";
import Error_404 from "./components/Error_404";
function App() {
  return (
    <>
      <ToursProvider>
        <Router>
          <Loader>
            <Nav />
            <Routes>
              <Route exact path="/tours" element={<Tours />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/tour/:id" element={<SingleTour />} />
              <Route exact path="/tours-by-city/:city" element={<ToursByCity />} />
              <Route exact path="*" element={<Error_404 />} />
            </Routes>
            <Footer />
          </Loader>
        </Router>
      </ToursProvider>
    </>
  );
}

export default App;
