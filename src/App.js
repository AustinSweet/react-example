import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import ParentComponent from './components/ParentComponent.js';

class App extends Component {
  render() {
    return(
      <>
    <div className="App">
      <Navbar dark color="secondary">
      <div className="container">
        <NavbarBrand href="/">React Example</NavbarBrand>
      </div>
      </Navbar>
    </div>
      <ParentComponent></ParentComponent>
      </>
    );
  }
}

export default App;
