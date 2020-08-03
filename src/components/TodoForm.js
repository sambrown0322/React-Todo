import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  handleChanges = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.text}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
        <button onClick={this.props.clear}>Clear completed</button>
      </form>
    );
  }
}
export default TodoForm;
