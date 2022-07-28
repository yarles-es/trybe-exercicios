import React from "react";
import TodosEstados from "../dados/data";
class Formulario extends React.Component {
  render() {
    // stateCorreto é o state do App;
    const { stateCorreto, alterarDados, eventoOnblur } = this.props;

    return (
      <fieldset>
          <legend>Dados Pessoais</legend>
        <div>
          <label>
            Nome:
            <input onChange={alterarDados} name="nome" type="name" maxLength="40" required/>
          </label>
        </div>

        <div>
          <label>
            Email:
            <input onChange={alterarDados} name="email" type="text" maxLength="50" required />
          </label>
        </div>

        <div>
          <label>
            CPF:
            <input onChange={alterarDados} name="cpf" type="text" maxLength="11" required />
          </label>
        </div>

        <div>
          <label>
            Endereço:
            <input onChange={alterarDados} name="endereco" type="text" maxLength="200" required />
          </label>
        </div>

        <div>
          <label>
            Cidade:
            <input onBlur={eventoOnblur} onChange={alterarDados} value={stateCorreto.cidade} name="cidade" type="text" maxLength="28" required />
          </label>
        </div>

        <div>
          <label>
            Estado:
            <select onChange={alterarDados} name="estado" id="estado">
              <option value="">---</option>
              {TodosEstados.map(({ uf, nome }) => (
                <option key={uf}>{nome}</option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="casa">
            <input onChange={alterarDados} name="tipoEndereco" id="casa" value="casa" type="radio" /> Casa
          </label>
          <label htmlFor="apartamento">
            <input onChange={alterarDados} name="tipoEndereco" id="apartamento" value="apartamento" type="radio" />
            Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

export default Formulario;
