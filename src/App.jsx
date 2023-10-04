import React, { useEffect, useState } from "react";
import "./App.css";
import { Footer, Header } from "./components";
import HomePage from "./pages/HomePage";
import Aos from "aos";
import { Route, Routes } from "react-router-dom";

const getStorageTheme = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const App = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    // We init the Aos package for animations
    Aos.init();
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className='bg-[url("./assets/bg.png")] h-screen bg-center bg-no-repeat bg-cover'>
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
