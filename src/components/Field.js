import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  // easily get your context object by using contextType
  static contextType = LanguageContext;
  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
