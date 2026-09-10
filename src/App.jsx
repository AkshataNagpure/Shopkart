import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Footer from './components/Footer'

function App() {
  const { state } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: state.theme === "light" ? "#fff" : "#121212",
        color: state.theme === "light" ? "#000" : "#fff",
        minHeight: "100vh"
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;