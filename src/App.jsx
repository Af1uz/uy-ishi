import "./App.css";
import { useEffect, useState } from "react";
// import Loader from "./Companents/Loader";
import { ToastContainer, toast } from 'react-toastify';



function App() {


  const [user, setUser] = useState("");
  const [paswd, setPaswd] = useState("");
  const [img, setImg] = useState("");
  

  const handleUser = (e) => {
    setUser(e.target.value)
     
  };

  const handlePaswd = (e) => {
    setPaswd(e.target.value)
     
  };

  const handleImg = (e) => {
    setImg(e.target.value)
     
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if(user.trim().length && paswd.trim().length){
      // alert("Succesful")
      toast.success("mufaqiyatli",{
        position: "top-center",
      });
      
    
      setUser("");
      setPaswd("");
      setImg("");
    }else{
      // alert("Xato topildi")

      toast.error("Code Error",{
        position: "top-center",
      });
    }

  };




  // const [product, setProduct] = useState([]);
  // const [name, setName] = useState("");

  // const api = `https://www.omdbapi.com/?s=ip man&apikey=c65fcde9`;

  // useEffect(() => {
  //   fetch(api)
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data.Search));
  // }, [api]);

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   await fetch(`https://www.omdbapi.com/?s=${name}&apikey=c65fcde9`)
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data.Search));
  // };

  return (
    <div className="App">


      <div className="m">
        <div className="x">
          <form onSubmit={handleSubmit} >

      <h1 className="af" >Afruz Login</h1>

      <input className="users" onChange={handleUser} value={user} required type="text" placeholder="  username/user" />
      <input className="paswords" onChange={handlePaswd} value={paswd} required type="pasword" placeholder="   pasword" />

      <input className="files" onChange={handleImg} value={img} type="file" />

      <button className="butoncha" >Submit</button>

      </form>
        </div>
      </div>





      {/* <form className="froma">
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

      <Loader product={product} /> */}
    </div>
  );
}

export default App;
