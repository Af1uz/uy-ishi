import "./App.css";
import { useEffect, useState } from "react";
import Loader from "./Companents/Loader";

function App() {
  const [product, setProduct] = useState([]);
  const [name, setName] = useState("");

  const api = `https://www.omdbapi.com/?s=ip man&apikey=c65fcde9`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setProduct(data.Search));
  }, [api]); // ✅ api dependency qo‘shildi

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetch(`https://www.omdbapi.com/?s=${name}&apikey=c65fcde9`)
      .then((res) => res.json())
      .then((data) => setProduct(data.Search));
  };

  return (
    <div className="App">
      <form className="froma">
        <input
          onChange={handleChange}
          value={name}
          placeholder="kino/mult"
          type="search"
          className="xx"
        />
        <button onClick={handleSearch} className="aa">
          Search
        </button>
      </form>

      <Loader product={product} />
    </div>
  );
}

export default App;
