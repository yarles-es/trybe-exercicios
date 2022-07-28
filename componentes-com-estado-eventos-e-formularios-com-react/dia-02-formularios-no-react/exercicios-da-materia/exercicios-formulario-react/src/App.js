import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estadofavorito: "",
      idade: 0,
      vaiComparecer: false,
    };
  }

  changeMovement = ({ target }) => {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { estadoFavorito, idade, vaiComparecer } = this.state;
    return (
      <div>
        <form>
          <fieldset>
            <legend>Obrigatorio!</legend>
            <label>
              Estado favorito:
              <textarea
                onChange={this.changeMovement}
                value={estadoFavorito}
                name="estadofavorito"
              />
            </label>

            <label>
              Idade:
              <input
                onChange={this.changeMovement}
                value={idade}
                type="number"
                name="idade"
              />
            </label>
          </fieldset>

          <label>
            Vai comparecer?
            <input
              onChange={this.changeMovement}
              value={vaiComparecer}
              type="checkbox"
              name="vaiComparecer"
            />
          </label>

          <label>
            <input type="file" />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
