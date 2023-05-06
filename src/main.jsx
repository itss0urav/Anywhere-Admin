import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AdminUserContextProvider from "./context/AdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminUserContextProvider>
      <App />
    </AdminUserContextProvider>
  </React.StrictMode>
);
