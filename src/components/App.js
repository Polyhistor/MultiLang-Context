import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = {
    language: "english"
  };
  // take the language value and update your state with it
  onLanguageChange = language => {
    // when key and value are the same, in es2015 or above you can just type it once :)
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          select a language
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        {/* this is our way of communicating this component with the context. Through the provider. The value property is the value we'd like to add 
        to the context */}
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>

        <LanguageContext.Provider value="english">
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
