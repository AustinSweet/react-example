import { Component } from 'react';

class ParentComponent extends Component {

    //'Props' stands for properties, just an easy shorthand to pass data and information from one component to another.
    //This is one of those actions that needs to be handled differently than in Java.
    //Also, constructors. Introduced with ES6, and works slightly differently than in Java. Rather than being a method we call
    //TO create an object, this is a method that WILL be called when an instance of this component is created.
    constructor(props) {
        //Don't freak if you get lots of red underlines while putting together the superconstructor
        //call while creating a component from scratch! Totally normal, just keep putting the required pieces in and you'll be fine.
        //If you can't handle it, check out how to generate react components using the CLI.
        super(props);
    }

    render() {
        return (

        );
    }
}

export default ParentComponent;