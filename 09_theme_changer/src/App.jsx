import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="mt-5 p-4 bg-pink-500 text-2xl">Theme-Changer</h2>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Button Component */}
          </div>

          <div className="w-full max-w-sm mx-auto">{/* Card */}</div>
        </div>
      </div>
    </>
  );
}

export default App;
