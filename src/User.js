import React, { Component } from "react";

import "./User.css";


function displayAvatar(avatarUrl) {
  if (avatarUrl) {
    {/* no quotes when using variables for HTML attributes */}
    return <img src={avatarUrl} />;
  }
  else {
    return <img src="https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png" />
  }
}

// a component is a CLASS that extends from React's Component class
class User extends Component {
  // every component class needs a "render()" method
  // (determines the component's content)
  render() {
    // "props" are information being sent to the component
    console.log(this.props);

    // <User userName="Mr. Blah" />
    const { userName, avatar, isVerified } = this.props;

    let cssClasses = "User";
    if (isVerified) {
      cssClasses += " verified";
    }

    // return the HTML of this component in "render()"
    // (use parenthesis when returning multiple lines of HTML)
    return (
      // use "className" instead of "class" for styling
      <div className={cssClasses}>
        <p>Welcome, {userName}!</p>
        {displayAvatar(avatar)}
      </div>
    );
  }
}

// export your component CLASS so that you can display it in other files
export default User;
