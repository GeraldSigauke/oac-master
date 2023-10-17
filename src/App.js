import { createContext, useState } from 'react';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import HeroPage from './pages/HeroPage';
import About from './components/About';
import AboutPage from './pages/AboutPage';
import Pricing from './components/Pricing';
import PricingPage from './pages/PricingPage';
import Testimonials from './components/Testimonials';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactUs from './components/ContactUs';
import ContactUsPage from './pages/ContactUsPage';
import FooterComponent from './components/FooterComponent';
import SwiperPage from './pages/SwiperPage';
import FastTravelComponents from './components/FastTravelComponents';

// Dark and Light Theme Stuff:

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="font-sans" id={theme}>
          <div id='origin' className=""></div>
          <NavbarComponent />
          <Home />
          <HeroPage />
          <SwiperPage />
          <About />
          <AboutPage />
          <Pricing />
          <PricingPage />
          <Testimonials />
          <TestimonialsPage />
          <ContactUs />
          <ContactUsPage />
          <FooterComponent />
          <FastTravelComponents />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
