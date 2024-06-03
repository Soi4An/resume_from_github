import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Router basename="/resume_from_github"> */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
