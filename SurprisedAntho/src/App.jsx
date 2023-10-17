import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import data from "./data/data.json";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Toutes les catégories"
  );

  const filteredData =
    selectedCategory === "Toutes les catégories" ? data : data.filter((article) => article.category === selectedCategory);

  return (
    <>
      <Navbar />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="Toutes les catégories">Toutes les catégories</option>
        <option value="Plantes d'intérieur">Plantes d'intérieur</option>
        <option value="Succulentes">Succulentes</option>
        <option value="Plantes dépolluantes">Plantes dépolluantes</option>
      </select>
      <CardList data={filteredData} />
      <Footer />
    </>
  );
}

export default App;
