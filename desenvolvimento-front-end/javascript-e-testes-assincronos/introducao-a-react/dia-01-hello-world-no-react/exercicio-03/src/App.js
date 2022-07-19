import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './footer';
import './App.css';
import Section from './section';

class App extends React.Component {
  render() {
    return(
    <div>
      <Header />
      <Section />
      <Content />
      <Footer />
    </div>
    );
  }
}

export default App;
