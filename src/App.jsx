// App.jsx
import React from 'react';
import "./app.css"
import Navbar from './Componenets/Navbar';
import HeroSection from './Componenets//HeroSection';
import TrendingSection from './Componenets/TrendingNow';
import ReasonsToJoin from './Componenets/ReasonToJoin';
import FAQSection from './Componenets/FAQ';
import EmailCaptureFooter from './Componenets/EmialCTA';
import Footer from './Componenets/Footer';
import CurveDivider from './Componenets/Curve';

const App = () => {
  return (  
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <CurveDivider/>
      <TrendingSection />
      <ReasonsToJoin />
      <FAQSection />
      <EmailCaptureFooter />
      <Footer />
    </div>
  );
};

export default App;