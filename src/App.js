import React from 'react';
import PizzaForm from './components/PizzaForm';
import PizzaTracker from './components/PizzaTracker';
import MainDisplay from './components/MainDisplay';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <PizzaForm />
      <PizzaTracker />
      <MainDisplay />
      <Footer />
    </div>
  );
};

export default App;
