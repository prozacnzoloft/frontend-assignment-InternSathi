import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Navbar } from "./components/navigation_Bar";
import { Details } from "./pages/details-Page";
import { SearchPage } from "./pages/search-Page";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
       <ProductContext.Provider value={products}>
    <div className=" min-h-screen flex flex-wrap flex-col">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/search/:searchedFor" element={<SearchPage />} />
          </Routes>
        </Router>
    </div>
      </ProductContext.Provider>
  
  );
}

export default App;
