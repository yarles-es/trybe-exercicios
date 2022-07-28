import React from "react";

class ResumoForm extends React.Component {
  render() {
      const { nome, email, cpf, endereco, cidade, estado, tipoEndereco, resumoCurriculo, cargo, descricaoCargo, previa } = this.props.stateCorreto;
    return (
      <div style={{display: `${previa}`}} className="resumo">
        <h1>Dados a enviar:</h1>
        <h2>Dados Pessoais</h2>
        <div> Name: {nome}</div>
        <div> Email: {email}</div>
        <div> CPF: {cpf}</div>
        <div> Endereço: {endereco}</div>
        <div> Cidade: {cidade}</div>
        <div> Estado: {estado}</div>
        <div> Tipo de residência: {tipoEndereco}</div>
        <h2>Profissional</h2>
        <div> Currículo: {resumoCurriculo}</div>
        <div> Cargo: {cargo}</div>
        <div> Descrição do cargo: {descricaoCargo}</div>
      </div>
    );
  }
}

export default ResumoForm;
