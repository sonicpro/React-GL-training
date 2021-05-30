import { Component } from "react";
import Child from "./child";

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    outputEvent = () => {
        this.setState({ count: ++this.state.count });
    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <Child clickHandler={this.outputEvent} />
            </div>
        );
    }
}

export default Parent;