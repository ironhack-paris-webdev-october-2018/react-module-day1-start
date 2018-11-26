import React, { Component } from "react";

import "./App.css";
import User from "./User.js";

const user = {
  firstName: "Pablo",
  lastName: "Perez",
  avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/InddelVal-Boca_%289%29.jpg/220px-InddelVal-Boca_%289%29.jpg"
};


// a component is a CLASS that extends from React's Component class
class App extends Component {
  handleH2Click() {
    alert("Hell yeah, it is!");
  }

  // every component class needs a "render()" method
  // (determines the component's content)
  render() {
    // return the HTML of this component in "render()"
    // (use parenthesis when returning multiple lines of HTML)
    return (
      // use "className" instead of "class" for styling
      <div className="App">
        {/* call the "handleH2Click()" method when the H2 is clicked */}
        <h2 onClick={() => this.handleH2Click()}>
          JSX is Weird
        </h2>
        <p>This is App component.</p>

        {/* like HTML tags, components can be displayed many times
            (you can send a component "props" to customize the way it displays)
        */}
        <User userName={user.firstName} avatar={user.avatarUrl} />
        <User userName="Vincent" isVerified />
      </div>
    );
  }
}

// export your component CLASS so that you can display it in other files
export default App;
