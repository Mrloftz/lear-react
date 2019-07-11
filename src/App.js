import React from 'react';
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Menu from "./components/MenuList"


class App extends React.Component {
  render() {
    let links = [
      {label: 'Home', link: '#home', active: true},
      {label: 'About', link: '#about'},
      {label: 'Portfolio', link: '#portfolio'},
      {label: 'Contact Us', link: '#contact-us'}
    ]
    return (
      <div className="container center">
        <Menu links={links}/>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
