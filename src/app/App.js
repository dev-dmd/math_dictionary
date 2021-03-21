import React from 'react';
import './App.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Dictionary from '../components/dictionary_page/dictionary';

function App({ match }) {
  
  return (
      <div component="main" className="page">      
        <Header />
        <Dictionary match={match} />
        <Footer />      
      </div>
  )
}

export default App;
