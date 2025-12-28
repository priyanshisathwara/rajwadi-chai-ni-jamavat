import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Franchise from "./pages/Franchise.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhatsAppButton from '../src/components/WhatsAppButton.jsx';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <WhatsAppButton showButton={false} />

      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
