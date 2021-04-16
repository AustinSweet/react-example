//The import { Target, OtherTarget } syntax was introduced with ES6 
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

//Another ES6 feature, class declarations
//When you use create-react-app, your components may be initialized as 'functional' components
//You can utilize these as-is, or convert them into class components by adding the necessary syntax.
//Personally, I opt for the latter.
class App extends Component {


//The render method is simply a return statement that contains React elements.
//This allows us to return the needed elements to enable our DOM to display what we want.
  render() {
    return(
      //Because 'class' is a reserved keyword in React, we use className to mark JSX elements with css classes
    <div className="App">
      <Navbar dark color="secondary">
      <div className="container">
        <NavbarBrand href="/">React Example</NavbarBrand>
      </div>
      </Navbar>
    </div>
    );
  }
}

export default App;
