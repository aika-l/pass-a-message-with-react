import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      returnMsg: ""
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  passMsg = () => {
    const newMsg = this.state.inputValue.toUpperCase().trim();
    if (this.state.inputValue) {
      this.setState({
        returnMsg: newMsg,
        inputValue: ""
      });
    } else {
      console.log("enter msg");
    }
  };

  render() {
    return (
      <div>
        <p>A Message You Would Like to Pass</p>
        <input value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.passMsg}>Submit</button>
        <p></p>
        <p>Last Message Delivered</p>
        <p className="result">{this.state.returnMsg}</p>
      </div>
    );
  }
}
export default App;
