import React from "react";
import "./App.css";
import Pokedex from "./componets/Pokedex";

class App extends React.Component {
  render() {
    return (
      <section className="tudo">
        <Pokedex />
      </section>
    );
  }
}

export default App;

