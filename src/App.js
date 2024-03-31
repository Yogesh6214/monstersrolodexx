import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [
        {
          name: "Pichani",
          id: "mons1",
        },
        {
          name: "Chudail",
          id: "mons2",
        },
        {
          name: "Dakani",
          id: "mons3",
        },
        {
          name: "Bharmrakshash",
          id: "mons4",
        },
        {
          name: "Jin",
          id: "mons5",
        },
        {
          name: "Bhoot",
          id: "mons6",
        },
      ],
    };
  }
  
  render() {
    return (
      <div className="App">
        {this.state.monster.map((monsters) => (
          <h1 key={monsters.id}>{monsters.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
