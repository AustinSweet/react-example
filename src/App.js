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
              <NavbarBrand href="/">
                I'm a Navbar. I'm set up so you can click me to go back to the "/" route's page
              </NavbarBrand>
            </div>
          </Navbar>
        </div>
        <div>
          <ParentComponent></ParentComponent>
        </div>
      </>
    );
  }
}

export default App;
