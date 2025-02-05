import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Accreditation from "./pages/Accreditation";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/accreditation" element={<Accreditation />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
