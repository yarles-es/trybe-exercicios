// import React from 'react';

// class App extends React.Component {
//   constructor() {
//     super()
//     this.clickou = this.clickou.bind(this)
// }

// clickou() {
//   console.log(this)
//   console.log('deu certo')
// }

//   render() {
//     return(
//       <button onClick={this.clickou}>Click</button>
//     );
//   }
// }

// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';

// class App extends React.Component {
// constructor() {
//   super()

//   this.contadorDeCliquesButton1 = this.contadorDeCliquesButton1.bind(this);
//   this.contadorDeCliquesButton2 = this.contadorDeCliquesButton2.bind(this);
//   this.contadorDeCliquesButton3 = this.contadorDeCliquesButton3.bind(this);

//   this.state = {
//     quantidadeDeCliques1: 0,
//     quantidadeDeCliques2: 0,
//     quantidadeDeCliques3: 0.
//   };
 
// }

// contadorDeCliquesButton1() {
// this.setState((estadoAnterior, _props) => ({
//   quantidadeDeCliques1: estadoAnterior.quantidadeDeCliques1 + 1,
// }))
// }

// contadorDeCliquesButton2() {
//   this.setState((estadoAnterior, _props) => ({
//     quantidadeDeCliques2: estadoAnterior.quantidadeDeCliques2 + 1,
//   }))
// }

// contadorDeCliquesButton3() { // Usando desconstrução para fazer a mesma coisa;
//   this.setState(({quantidadeDeCliques3}, _props) => ({
//     quantidadeDeCliques3: quantidadeDeCliques3 + 1,
//   }))
// }

// render(){
//   return (
//     <div>
//       <button onClick={this.contadorDeCliquesButton1}>primeiro Botão: {this.state.quantidadeDeCliques1} </button><br/><br/>
//       <button onClick={this.contadorDeCliquesButton2}>Segundo Botão: {this.state.quantidadeDeCliques2} </button><br/><br/>
//       <button onClick={this.contadorDeCliquesButton3}>Terceiro Botão: {this.state.quantidadeDeCliques3} </button><br/><br/>
//     </div>
//   );
// }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export default App;

// import React from 'react';

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       NumeroCliques1: 0,
//       NumeroCliques2: 0,
//       NumeroCliques3: 0,
//     };

//     this.contadorDeCliques1 = this.contadorDeCliques1.bind(this);
//     this.contadorDeCliques2 = this.contadorDeCliques2.bind(this);
//     this.contadorDeCliques3 = this.contadorDeCliques3.bind(this);
    
//   }

//   contadorDeCliques1() {
//     this.setState((estadoAnterior, _props) => ({
//       NumeroCliques1: estadoAnterior.NumeroCliques1 + 1,
//     }),
//     () => {
//       console.log(`Botão 1: ${this.trocarCorBotao(this.state.NumeroCliques1)}`);
//       console.log(this.state.NumeroCliques1);
//     });
//   }

//   contadorDeCliques2() {
//     this.setState((estadoAnterior, _props) => ({
//       NumeroCliques2: estadoAnterior.NumeroCliques2 + 1,
//     }),
//     () => {
//       console.log(`Botão 2: ${this.trocarCorBotao(this.state.NumeroCliques2)}`);
//       console.log(this.state.NumeroCliques2);
//     });
//   }

//   contadorDeCliques3() {
//     this.setState((estadoAnterior, _props) => ({
//       NumeroCliques3: estadoAnterior.NumeroCliques3 + 1,
//     }),
//     () => {
//       console.log(`Botão 3: ${this.trocarCorBotao(this.state.NumeroCliques3)}`);
//       console.log(this.state.NumeroCliques3);
//     });
//   }

//   trocarCorBotao(number) {
//     const valor = ( number % 2 === 0 )? 'green' : 'white';
//     return valor;
//   }
  
//   render() {

//     const {NumeroCliques1, NumeroCliques2, NumeroCliques3} = this.state;

//     return(
//       <div>
//          <button
//          onClick={this.contadorDeCliques1}
//          style={{backgroundColor: this.trocarCorBotao(NumeroCliques1)}}
//          >Botão 1:  {NumeroCliques1}
//          </button>

//          <button
//          onClick={this.contadorDeCliques2}
//          style={{backgroundColor: this.trocarCorBotao(NumeroCliques2)}}
//          >Botão 2: {NumeroCliques2}
//          </button>

//          <button
//          onClick={this.contadorDeCliques3}
//          style={{backgroundColor: this.trocarCorBotao(NumeroCliques3)}}
//          >Botão 3: {NumeroCliques3}
//          </button>
//       </div>
//     );
//   }
// }

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cliques: 0,
    }

    this.ContaCliques = this.ContaCliques.bind(this);
    
  }
  
  ContaCliques() {
    this.setState((valorAnterior, _props) => ({
      cliques: valorAnterior.cliques + 1,
    }),
    () => console.log(this.pintaButton(this.state.cliques)))
  }

  pintaButton(number) {
    if(number % 2 === 0) return 'black';
    if(number % 5 === 0) return 'green';
    return 'white';
  }
  
  render() {
    const {cliques} = this.state;
    return(
      <button onClick={this.ContaCliques} style={{backgroundColor: this.pintaButton(cliques)}}>Botão com cor : {cliques}</button>
    );
  }
}
export default App;