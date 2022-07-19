import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['dormir cedo', 'tomar cafe', 'beber muita agua', 'lavar a louça', 'varrer a casa', 'fazer almoço', 'tomar um banho'];

class App extends React.Component {
  render() {
    return (
      <ul>{tarefas.map((tarefa) => Task(tarefa))}</ul>
    );
  }
}

export default App;
