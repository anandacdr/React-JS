import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" w-full max-w-md mx-auto shadow-md justify-center bg-gray-800 rounded-lg px-4 my-8 ">
      <div className="flex cols  text-white shadow rounded-lg overflow-hidden mb-4 p-5 ">

        <input 
        type="number"
        className="p-2 border text-black rounded mr-2" />


        <select 
        className="p-2 border border-gray-400 text-black rounded">
          <option value="usd">USD</option>
          <option value="npr">NPR</option>
          <option value="inr">INR</option>
        </select>
      

      </div>

      <button
        className="p-2 bg-slate-400 text-white rounded" 
        >
          Swap
      </button>


      <div className="flex items-center mb-4 p-4">
        <input 
        type="number"
        className="p-2 border border-gray-300 rounded mr-2"
         />

         <select
         className="p-2 border border-gray-300 rounded mr-2">
          <option value="npr">NPR</option>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
         </select>

      </div>

      <button
      className="p-2 bg-slate-400 text-black rounded m-4"
      >
      Convert
      </button>
    </div>
  );
}

export default App;
