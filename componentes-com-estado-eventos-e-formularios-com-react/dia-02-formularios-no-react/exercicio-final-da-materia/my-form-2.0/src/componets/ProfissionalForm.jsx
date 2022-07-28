import React from "react";

class ProfissionalForm extends React.Component {
  render() {
      const { alterarDados, fazerAlertaImportante } = this.props;
    return (
      <fieldset>
        <legend>Dados Profissionais </legend>
        <div>
          <label>
            Resumo do currículo:
            <textarea onChange={ alterarDados } name="resumoCurriculo" cols="30" rows="10" maxLength="1000" required />
          </label>
        </div>

        <div>
          <label>
            Cargo:
            <input onMouseEnter={fazerAlertaImportante} onChange={ alterarDados } name="cargo" type="text" maxLength="40" required />
          </label>
        </div>

        <div>
          <label>
            Descrição do cargo:
            <textarea onChange={ alterarDados } name="descricaoCargo" cols="30" rows="10" maxLength="500" required />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default ProfissionalForm;
