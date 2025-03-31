import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Projects from "./pages/projects/Projects";
import SimpleJournal from "./pages/projects/simple journal/Simple Journal";
import SJPrivacyPolicy from "./pages/projects/simple journal/PrivacyPolicy";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/simple-journal" element={<SimpleJournal />} />
        <Route path="/projects/simple-journal/privacy-policy" element={<SJPrivacyPolicy />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
