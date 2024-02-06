import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App.tsx";

import "/src/styles/_v.scss";
import "/src/styles/app.scss";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
