import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router } from "./views/Router.js";
import { AppProvider } from "./store/AppContext.js";
import "bootstrap/dist/css/bootstrap.min.css";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Router />
    </AppProvider>
  </React.StrictMode>
);
