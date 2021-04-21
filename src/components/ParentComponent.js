import { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
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