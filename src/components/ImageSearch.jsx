import React, { createContext, useContext, useState } from "react";
import { GlobalContext } from "../Context/Context";

const ImageSearch = () => {

 const {handleSubmit, term, setTerm } = useContext(GlobalContext)

 

  console.log(term)

  return (
    <div>
      <form className="flex justify-center" onSubmit={handleSubmit} >
        <div className="flex justify-center p-2  w-1/4 min-w-75 gap-4 ">
          <input
            className="p-2 text-lg   border-b-teal-500 w-full border-b-2 outline-0"
            type="text"
            placeholder="Search Image Term"
            value={term}
            onChange={(e) => {setTerm(e.target.value)}}
          />
          <button className="p-2 bg-teal-500 text-white font-semibold tracking-wide rounded-sm cursor-pointer hover:opacity-75 ">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
