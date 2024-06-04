import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function myApp() {
  return (
    <div>
      <h2>Custom App</h2>
    </div>
  );
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://github.com",
//       target: "_blank"
//   },
//   children: "Click me to visit Github"
// }

const anotherElement = (
  <a href="https://www.github.com" target="_blank">
    Github
  </a>
);

const anotherUser = "Pikachu";

const reactElement = React.getElementById(
  "a",
  { href: "https://github.com", target: "_blank" },
  "click me to visit GitHub",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    reactElement
  </React.StrictMode>
);
