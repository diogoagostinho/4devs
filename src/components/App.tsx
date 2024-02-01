import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import PostPage from "./PostPage";
import Tags from "./Tags";
import Faq from "./Faq";
import About from "./About";
import TagPage from "./TagPage";
import UserPage from "./UserPage";
import BadUrl from "./BadUrl";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PostForm from "./PostForm";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <div className="app">
          <div className="app__top">
            <Navbar />
          </div>
          <div className="app__bottom">
            <div className="app__bottom-left">
              <Sidebar />
            </div>
            <div className="app__bottom-right">
              <Routes>
                <Route index element={<Home />} />
                <Route path="tags" element={<Tags />} />
                <Route path="faq" element={<Faq />} />
                <Route path="about" element={<About />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/tag/:id" element={<TagPage />} />
                <Route path="/user/:id" element={<UserPage />} />
                <Route path="submit-posts" element={<PostForm />} />
                <Route path="*" element={<BadUrl />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
