import { useState, useCallback } from "react";

import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@#$%^&*()_+[]{}|;':,.<>?/`~"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass = str.charAt(char)


    }

    setPassword(pass)

  }, [
    length,
    numberAllowed,
    charAllowed,
    setPassword,
  ]);


  return (
    <div className="min-h-screen flex justify-center bg-black-100">
      <h1 className="text-3xl font-bold text-white my-4">
        Password Generator using React
      </h1>
    </div>
  );
}

export default App;


