import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("bg-gray-100");

  const handleColorChange = (color) => {
    setBgColor(color)
  }

  return (
    <div className={`flex flex-col justify-between min-h-screen ${bgColor}`}>
      <header className="p-4 text-center">
        <h1 className="text-3xl font-bold text-black uppercase">
          Color Changing Project in React
        </h1>
      </header>
      <main className="flex-grow">
        
        
      </main>
      <footer className="p-3 text-white bg-gray-800">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-11 lg:grid-cols-3 xl:grid-cols-5">
          <button className="px-4 py-2 m-2 text-white bg-red-500 rounded cursor-pointer" onClick={() => handleColorChange("bg-red-500")}>Red</button>
          <button className="px-4 py-2 m-2 text-white bg-green-500 rounded cursor-pointer" onClick={() => handleColorChange("bg-green-500")}>Green</button>
          <button className="px-4 py-2 m-2 text-white bg-blue-500 rounded cursor-pointer" onClick={() => handleColorChange("bg-blue-500")}>Blue</button>
          <button className="px-4 py-2 m-2 text-white bg-green-500 rounded cursor-pointer" onClick={() => handleColorChange("bg-green-500")}>Green</button>
          <button className="px-4 py-2 m-2 text-white bg-yellow-500 rounded cursor-pointer" onClick={() => handleColorChange("bg-yellow-500")}>Yellow</button>
          <button className="px-4 py-2 m-2 text-white bg-pink-500 rounded cursor-pointer" onClick={() => handleColorChange("bg-pink-500")}>Pink</button>
          <button className="px-4 py-2 m-2 text-white bg-purple-500 rounded cursor-pointer" onClick={() => handleColorChange("bg-purple-500")}>Purple</button>
          <button className="px-4 py-2 m-2 text-white bg-orange-500 rounded cursor-pointer" onClick={() => handleColorChange("bg-orange-500")}>Orange</button>
          <button className="px-4 py-2 m-2 text-black bg-white rounded cursor-pointer" onClick={() => handleColorChange("bg-white-500")}>White</button>
          <button className="px-4 py-2 m-2 text-white bg-indigo-500 rounded cursor-pointer" onClick={() => handleColorChange("bg-indigo-500")}>Indigo</button>
          <button className="px-4 py-2 m-2 text-white rounded cursor-pointer bg-zinc-500" onClick={() => handleColorChange("bg-zinc-500")}>Zinc</button>
          <button className="px-4 py-2 m-2 text-white rounded cursor-pointer bg-violet-500" onClick={() => handleColorChange("bg-violet-500")}>Violet</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
