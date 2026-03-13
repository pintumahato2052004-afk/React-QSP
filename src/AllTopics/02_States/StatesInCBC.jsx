import { Component } from "react";

class StatesInCBC extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };

  decrement = () => {
    this.setState((prev) => {
      if (this.state.count > 0) {
        return { count: prev.count - 1 };
      }
    });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    console.log(this);
    return (
      <>
        <h1>States in CBC</h1>
        <h2>Counter : {this.state.count}</h2>

        <button onClick={this.increment}>Increment</button>

        <button onClick={this.decrement}>Decrement</button>

        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default StatesInCBC;
