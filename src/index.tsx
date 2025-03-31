import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Projects from "./pages/projects/Projects";

import SimpleJournal from "./pages/projects/simple-journal/SimpleJournal";
import BasketRush from "./pages/projects/basket-rush/BasketRush";


import SJPrivacyPolicy from "./pages/projects/simple-journal/PrivacyPolicy";
import BRPrivacyPolicy from "./pages/projects/basket-rush/PrivacyPolicy";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/simple-journal" element={<SimpleJournal />} />
        <Route path="/projects/basket-rush" element={<BasketRush />} />

        <Route path="/projects/simple-journal/privacy-policy" element={<SJPrivacyPolicy />} />
        <Route path="/projects/basket-rush/privacy-policy" element={<BRPrivacyPolicy />} />

      </Routes>
    </HashRouter>
  </StrictMode>
);
