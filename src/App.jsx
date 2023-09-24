import Footer from "./components/Footer";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarFavorite from "./pages/CarFavorite";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CarDetails />} />
        <Route path="/favorite/:id" element={<CarFavorite />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
