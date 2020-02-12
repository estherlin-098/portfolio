import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css'
//
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;

//git clone (paste the git hpps link)
//cd portfolio
//npm install

//kill the previous re link (rm -rf .git)
//git init
// git remote add orgin
//npm run build
//