import "./App.css";
import { useEffect, useState } from "react";
import Product from "./Companents/LoaderItem";
import Loader from "./Companents/Loader";

function App() {
  const [product, setProduct] = useState([]);

  const api = `https://www.omdbapi.com/?s=ip man&apikey=c65fcde9`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setProduct(data.Search));
  }, []);

  

  return (
    <div className="App">
      <Loader product={product} />
    </div>
  );
}

export default App;
