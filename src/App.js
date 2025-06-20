import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Features, Images } from "./components/Features";
import DownloadSection from "./components/DownloadSection";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import "./styles/index.css";
import DownloadPage from "./components/DownloadPage";
import PrivacyPage from "./components/PrivacyPage"
import TermsPage from "./components/TermsPage.jsx"
import {motion} from "framer-motion"
import { Content, WIOF } from "./components/Content.jsx"

const App = () => {
  return (
    <Router>
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/download" element={<DownloadPage /> } />
          <Route path="/privacy" element={<PrivacyPage /> } />
          <Route path="/terms" element={<TermsPage /> } />
          <Route
            path="/"
            element={
              <main>
                <Header />
                <div>
                  <HeroSection />
                  <Images />
                  <div
                    className="spacer"
                    style={{
                      maxHeight: "20px",
                      minHeight: "20px",
                      height: "20px",
                    }}
                  ></div>
                  <Features />
                  <div
                    className="spacer"
                    style={{
                      maxHeight: "20px",
                      minHeight: "20px",
                      height: "20px",
                    }}
                  ></div>
                  <Content />
                  <WIOF />
                  <div className="spacer"></div>
                  <DownloadSection />
                  <div className="spacer"></div>
                  <Contacts />
                  <div className="spacer"></div>
                  <Footer />
                </div>
              </main>
            }
          />
        </Routes>
      </motion.div>
    </Router>
  );
};

export default App;
