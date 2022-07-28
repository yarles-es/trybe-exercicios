import './App.css';
import React from 'react';
import Formulario from './componets/Formulario';
import ProfissionalForm from './componets/ProfissionalForm';
import ResumoForm from './componets/ResumoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipoEndereco: '',
      resumoCurriculo: '',
      cargo: '',
      descricaoCargo: '',
      alerta: false,
      previa: 'none',
    }
  }

  verPrevia = () => { // configura o css da previa para ver ou não ver a lista;
    if (this.state.previa === 'block') this.salvarDados('previa', 'none');
    if (this.state.previa === 'none') this.salvarDados('previa', 'block');
  }
  
  fazerAlertaImportante = () => { // emite um alerta apenas uma vez, pois ao rodar a função ela adiciona um novo valor para state;
    if (this.state.alerta === false) {
      this.salvarDados('alerta', true);
      return alert('Preencha com cuidado esta informação.');
    }
  }

  eventoOnblur = ({target}) => { // avalia qual elemento foi usado target para rodar o evento onblur;
    let { name, value } = target;
    if(name === 'cidade') value = this.VeriPrimeiraLetra(value);
    this.salvarDados(name , value);
  }

  VeriPrimeiraLetra = (value) => { // verifica se a o primeiro digito do campo é um numero e se for vai limpar o mesmo;
   let valor = !isNaN(value[0]);
   (valor === true)? valor = '' : valor = value
   return valor;
  }

  alterarDados = ({target}) => { // Função usada para passar dados para avaliar a ido no state;
    let { name, value } = target;
    if(name === 'nome') value = value.toUpperCase();
    if(name === 'endereco') value = this.tirarCaracteresEspeciais(value);
    
    this.salvarDados(name, value);
  }
  
  tirarCaracteresEspeciais = value => value.normalize("NFD").replace(/[^a-zA-Z0-9s ]/g, "") //normaliza os caracteres do valor, tirando caracteres especiais;

  salvarDados = (name, value) =>{ // salva os dados no state;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <Formulario stateCorreto={this.state} eventoOnblur={this.eventoOnblur} alterarDados={this.alterarDados} />
        <ProfissionalForm fazerAlertaImportante={this.fazerAlertaImportante} alterarDados={this.alterarDados}  />
        <input
            type="button"
            onClick={this.verPrevia}
            value="Previa do Envio"
        />
        <input
            type="button"
            value="Limpar"
        />
        <ResumoForm stateCorreto={this.state} />
      </div>
    );
  }
}

export default App;