import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import PublicationsPage from "./pages/PublicationsPage";
import ProjectsPage from "./pages/ProjectsPage";
import DetailPage from "./pages/DetailPage";
import "./styles/global.css";
import Navbar from "./components/Navbar";

// Restore direct links redirected through GitHub Pages' 404 page.
try {
  const redirectPath = sessionStorage.getItem("redirectPath");
  sessionStorage.removeItem("redirectPath");
  if (redirectPath) {
    const target = new URL(redirectPath, window.location.origin);
    if (target.origin === window.location.origin) {
      window.history.replaceState(null, "", target.pathname + target.search + target.hash);
    }
  }
} catch {
  // The site remains usable when browser storage is unavailable.
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/:category/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
