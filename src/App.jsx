import { Component } from "react";
import "./App.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div id="container">
        <div id="title">Counter App</div>
        <div id="countnum">{this.state.count}</div>
        <div id="ButtonAll">
          <button id="Button1" onClick={() => this.increment()}>
            +
          </button>
          <button id="Button2" onClick={() => this.decrement()}>
            -
          </button>
          <button id="Button3" onClick={() => this.reset()}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
