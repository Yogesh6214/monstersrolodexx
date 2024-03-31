import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      String: "Hi, Yogesh",
    };
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Monsters Rolodex</p>
          <a
            className="App-link"
            href="https://monstaersrolodex.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Monsters Rolodex App
          </a>
          <p>{this.state.String}</p>
          <button
            style={{
              backgroundColor: "#61dafb",
              border: "none",
              color: "white",
              padding: "5px 15px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
            }}
            onClick={() =>
              this.setState({ String: "Welcome to Monsters Rolodex App" })
            }
          >
            Click Me
          </button>
        </header>
      </div>
    );
  }
}

export default App;
