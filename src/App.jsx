import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Franchise from "./pages/Franchise.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhatsAppButton from '../src/components/WhatsAppButton.jsx';
import Branches from "./components/Branches.jsx";


function App() {
  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="1ezIJcPuQEe0vMdRw3ck8CYG65hZ8rsqF04TyqeQ7rs"
        />
      </Helmet>

      <BrowserRouter>
        <Navbar />
        <WhatsAppButton showButton={false} />

        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/branches" element={<Branches />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
