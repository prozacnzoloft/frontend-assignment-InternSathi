import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Navbar } from "./components/navigation_Bar";
import { Details } from "./pages/details-Page";

function App() {
  return (
        <div className=" min-h-screen border border-red-500 flex flex-wrap flex-col">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
