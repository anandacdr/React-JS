import { useState, useCallback, useEffect, useRef } from "react";

import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%^&*()_+[]{}|;':,.<>?/`~";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // copy password clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  // to call -> new hook - useEffect Hook
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className=" w-full max-w-md mx-auto shadow-md justify-center bg-gray-800 rounded-lg px-4 my-8">
      <h1 className="text-3xl font-bold text-white my-4 text-center">
        Password Generator using React
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          className="outline-none w-full py-1 px-3 m-4"
          type="text"
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
          
        />
        <button
          className="bg-blue-800 text-white px-3
          py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}
        >
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2 text-white">
        <div className="flex items-center gap-x-1">
          <input
            className="cursor-pointer"
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            className="cursor-pointer"
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            className="cursor-pointer"
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
