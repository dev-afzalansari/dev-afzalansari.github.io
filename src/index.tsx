import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./Home";
import Projects from "./projects/Projects";

import SimpleJournal from "./projects/simple-journal/SimpleJournal";
import BasketRush from "./projects/basket-rush/BasketRush";


createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
  
          <Route path="/projects/simple-journal" element={<SimpleJournal />} />
          <Route path="/projects/basket-rush" element={<BasketRush />} />
  
        </Routes>
      </HashRouter>
    </StrictMode>
  );

