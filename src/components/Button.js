import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // this is how we hook up a context object to a class component -> static contextType = theChosenContext
  // remember it only understand the name contextType
  static contextType = LanguageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    // bear in mind that aside from this.context you can implement the same by using <LanguageContext.consumer>
    // That's a better approach when we have multiple contexts
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
