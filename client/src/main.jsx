import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { HeroUIProvider } from "@heroui/react";
import './index.css'
import App from './App.jsx'
import CreateFireman from './pages/CreateFireman.js';
import Home from './pages/Home.js';
import FingerPrintScan from './pages/FingerPrintScan.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/CreateForm" element={<CreateFireman />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Scan" element={<FingerPrintScan />} />
        </Routes>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>,
)
