import { Component } from 'react';
import ChildComponent from './ChildComponent';
import './ParentComponent.css';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = [
            { id: 1, data: "This data is stored in the state." ,}, 
            { id: 2, data: "React is pretty copacetic." ,},
            { id: 3, data: "Mapping is a pretty essential tool.", }
           ]
    }

    render() {
        return(
            <>
                <div className="parent-wrapper">
                    <div className="parent-header">
                        I'm a parent component
                    </div>
                    <div className="child-wrapper">
                        {this.state.map(child => (
                            <ChildComponent dataFromParent = {child.data} key = {child.id}>
                            </ChildComponent>
                        ))}
                    </div>
                    <div>
                        <button class="btn btn-primary shadow p-3 mb-5 rounded navi">
                            Placeholder for second page navigation
                        </button>
                    </div>
                </div>
            </>
        )}
}


export default ParentComponent;