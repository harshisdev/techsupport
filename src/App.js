import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import { useEffect } from 'react';
import Aos from 'aos';
import Career from './pages/Career';
import Error from './pages/Error';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
