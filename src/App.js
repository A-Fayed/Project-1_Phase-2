import React, { Component } from 'react';
import './App.css';

import { Footer } from './Footer';
import Header from './Header';
import CardsList from './CardsList';


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <CardsList />
        <Footer />
      </>

    );
  }
}

export default App;
