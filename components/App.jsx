import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";  
import About from "../styles/About";
import Services from "./Services";
import ContactForm from "../styles/ContactForm";
import Footer from "./Footer";  
import AIAssistant from "./AIAssistant";


const App = () => {
  return (
    <div className="site-shell">
      <Navbar />
      <Home />
      <div className="value-strip" aria-label="Upvoid benefits">
        <span>CONNECTED LIVING</span><i>✦</i><span>CALM BY DESIGN</span><i>✦</i><span>SMARTER EVERY DAY</span><i>✦</i><span>CONNECTED LIVING</span><i>✦</i><span>CALM BY DESIGN</span>
      </div>
      <About />
      <Services />
      <ContactForm />
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;