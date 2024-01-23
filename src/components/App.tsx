import "../styles/_v.scss";
import "../styles/app.scss";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Home from "./Home";

function App() {
  return (
    <>
      <div className="app">
        <div className="app__top">
          <Navbar />
        </div>
        <div className="app__bottom">
          <div className="app__bottom-left">
            <Sidebar />
          </div>
          <div className="app__bottom-right">
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
