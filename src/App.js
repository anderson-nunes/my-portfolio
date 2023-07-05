import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { Projects } from "./pages/projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
