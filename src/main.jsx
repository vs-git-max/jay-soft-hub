import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import MyProvider from "./context/MyContext";

createRoot(document.getElementById("root")).render(
  <Router>
    <MyProvider>
      <App />
    </MyProvider>
  </Router>
);
