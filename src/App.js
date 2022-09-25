import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Layout from "./components/layout/layout";
import Biography from "./pages/biography/biography";
import Showcase from "./pages/showcase/showcase";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="showcase" element={<Showcase />} />
        <Route path="biography" element={<Biography />} />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}
