import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
