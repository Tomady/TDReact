import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./Layout"
import NotFount from "./pages/NotFound"
import MyPage from "./pages/MyPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path="/articles/:id" element={<Article />} />
      </Route>
      <Route path="*" element={<NotFount />} />
    </Routes>
  );
}

export default App;
