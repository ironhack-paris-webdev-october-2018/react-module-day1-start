import React, { Component } from "react";

import "./App.css";

const user = {
  firstName: "Pablo",
  lastName: "Perez",
};

function displayAvatar() {
  if (user.avatarUrl) {
    {/* no quotes when using variables for HTML attributes */}
    return <img src={user.avatarUrl} />;
  }
  else {
    return <img src="https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png" />
  }
}


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

        <p>Welcome, {user.firstName} {user.lastName}.</p>
        {displayAvatar()}
      </div>
    );
  }
}

// export your component CLASS so that you can display it in other files
export default App;
