// "import" is the new syntax that's like "require"
// (includes external code inside this JS file)
import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";


ReactDOM.render(
  <section>
    <h1>Hello, world!</h1>
    <p>This is the index.js file.</p>

    {/* Display the App component in the section */}
    <App />
  </section>,
  document.getElementById("root")
);
