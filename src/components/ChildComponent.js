import { Component } from 'react';
import './ChildComponent.css';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.dataFromParent,
        }
    }

    render() {
        const {data} = this.state;
        return(            
            <div className="child-body">
                <div id="child-title">I'm a child component</div>
                    <p>
                        {data}
                    </p>
            </div>
        )
    }
}

export default ChildComponent;