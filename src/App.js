import React, { Component } from "react";

import "./App.css";

// a component is a CLASS that extends from React's Component class
class App extends Component {
  // every component class needs a "render()" method
  // (determines the component's content)
  render() {
    // return the HTML of this component in "render()"
    // (use parenthesis when returning multiple lines of HTML)
    return (
      // use "className" instead of "class" for styling
      <div className="App">
        <h2>JSX is Weird</h2>
        <p>This is App component.</p>
      </div>
    );
  }
}

// export your component CLASS so that you can display it in other files
export default App;
