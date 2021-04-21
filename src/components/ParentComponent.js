import { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    //'Props' stands for properties, just an easy shorthand to pass data and information from one component to another.
    //Sharing data is one of those actions that needs to be handled differently than in Java.
    //Also, constructors. Introduced with ES6, and works slightly differently than in Java. Rather than being a method we call
    //TO create an object, this is a method that WILL be called when an instance of this component is created.
    constructor(props) {
        //Don't freak if you get lots of red underlines while putting together the superconstructor
        //call while creating a component from scratch! Totally normal, just keep putting the required pieces in and you'll be fine.
        //If you can't handle it, check out how to generate react components using the CLI.
        super(props);
        //State is huge right now in front end. Just think of it as a central data storage area,
        //where you define how info can be stored, and utilize it in different components. Again,
        //data sharing is a large part of React.
        this.state = [
            { id: 1, data: "This data is stored in the state." ,}, 
            { id: 2, data: "React is pretty copacetic." ,}
           ]
    }

    render() {
        return(
            <div className="child-wrapper">
              {this.state.map(child => (
                  <ChildComponent dataFromParent = {child.data} key = {child.id}></ChildComponent>
              ))}
            </div>
        )}
}


export default ParentComponent;