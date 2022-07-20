import React from 'react';
import './App.css';
import Album from './components/Album';
import discografia from './object-Album/object';

class App extends React.Component {
  render() {
    return (
      <div>
        {discografia.map((al) => <Album  album={al} /> )}
      </div>
    );
  }
}

export default App;
