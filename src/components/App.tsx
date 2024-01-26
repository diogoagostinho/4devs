import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import PostPage from "./PostPage";
import Tags from "./Tags";
import Faq from "./Faq";
import About from "./About";
import TagPage from "./TagPage";
import UserPage from "./UserPage";
import BadUrl from "./BadUrl";

function App() {
  return (
    <>
      <Routes>
        {" "}
        <Route index element={<Home />} />
        <Route path="tags" element={<Tags />} />
        <Route path="faq" element={<Faq />} />
        <Route path="about" element={<About />} />
        <Route path="post/*" element={<PostPage />} />
        <Route path="tag/*" element={<TagPage />} />
        <Route path="user/*" element={<UserPage />} />
        <Route path="*" element={<BadUrl />} />
      </Routes>
    </>
  );
}

export default App;
