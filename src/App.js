import React, { Component } from "react";

import "./App.css";
import User from "./User.js";


// a component is a CLASS that extends from React's Component class
class App extends Component {
  constructor(props) {
    // you need this or props won't work
    super(props);

    // set the initial state
    // (an object where each key-value is a different piece of state)
    this.state = {
      firstName: "Pablo",
      lastName: "Perez",
      avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/InddelVal-Boca_%289%29.jpg/220px-InddelVal-Boca_%289%29.jpg",
      colorSetting: "purple-theme",
    };
  }

  handleH2Click() {
    alert("Hell yeah, it is!");
  }

  changeTheme(classString) {
    // use React's "setState()" method to change the state
    // (it will cause the app to RENDER again)
    this.setState({ colorSetting: classString });
  }

  randomTheme() {
    const themes = [ "purple-theme", "orange-theme", "red-theme", "green-theme" ];
    const randomIndex = Math.floor(Math.random() * themes.length);
    // use React's "setState()" method to change the state
    // (it will cause the app to RENDER again)
    this.setState({ colorSetting: themes[randomIndex] });
  }

  changeName() {
    // use React's "setState()" method to change the state
    // (it will cause the app to RENDER again)
    this.setState({ firstName: "Sir or Madam" });
  }

  // every component class needs a "render()" method
  // (determines the component's content)
  render() {
    const { firstName, avatarUrl, colorSetting } = this.state;

    const cssClasses = "App " + colorSetting;

    // return the HTML of this component in "render()"
    // (use parenthesis when returning multiple lines of HTML)
    return (
      // use "className" instead of "class" for styling
      <div className={cssClasses}>
        {/* call the "handleH2Click()" method when the H2 is clicked */}
        <h2 onClick={() => this.handleH2Click()}>
          JSX is Weird
        </h2>
        <p>This is App component.</p>

        <button onClick={() => this.changeTheme("orange-theme")}>
          Use Orange Theme
        </button>
        <button onClick={() => this.changeTheme("red-theme")}>
          Use Red Theme
        </button>
        <button onClick={() => this.changeTheme("green-theme")}>
          Use Green Theme
        </button>
        <button onClick={() => this.randomTheme()}>
          Random
        </button>

        {/*
          * like HTML tags, components can be displayed many times
          * (you can send a component "props" to customize the way it displays)
          */}
        <User userName={firstName} avatar={avatarUrl} />
        <button onClick={() => this.changeName()}>
          That's Not My Name
        </button>

        <User userName="Vincent" isVerified />
      </div>
    );
  }
}

// export your component CLASS so that you can display it in other files
export default App;
