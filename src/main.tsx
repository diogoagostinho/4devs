import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App.tsx";
import Navbar from "./components/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";

import "/src/styles/_v.scss";
import "/src/styles/app.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="app">
      <div className="app__top">
        <Navbar />
      </div>
      <div className="app__bottom">
        <div className="app__bottom-left">
          <Sidebar />
        </div>
        <div className="app__bottom-right">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </div>
      </div>
    </div>
  </React.StrictMode>
);
