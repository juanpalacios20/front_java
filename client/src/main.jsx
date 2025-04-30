import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { HeroUIProvider } from "@heroui/react";
import './index.css'
import App from './App.jsx'
import CreateFireman from './pages/CreateFireman.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/" element={<CreateFireman />} />
        </Routes>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>,
)
