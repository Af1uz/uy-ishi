import React from "react";
import LoaderItem from "../Companents/LoaderItem";

const Loader = ({ product }) => {
  return (
    <div>
      <h1 className="tags">Afruz Movies</h1>

      {/* <form className="froma" >

        <input placeholder="kino/mult" type="search" />
        
        <button className="aa" >Search</button>
        

      </form> */}

      {
        <div className="mm">
          {product.length &&
            product.map((item, index) => <LoaderItem key={index} {...item} />)}
        </div>
      }
    </div>
  );
};

export default Loader;
