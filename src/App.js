import React from "react";
import TodoForm from "./components/TodoForm";

import TodoList from "./components/TodoList";

const dummyData = [
  {
    name: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: dummyData,
    };
  }
  toggleItem = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };
  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      list: [...this.state.list, newItem],
    });
  };
  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter((todo) => todo.completed === false),
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} toggleItem={this.toggleItem} />
        <TodoForm clear={this.clearCompleted} addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
