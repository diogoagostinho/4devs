import "../styles/_v.scss";

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
          <Sidebar />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
