import React, { Component } from "react";
import TodoList from "./List";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          value: "football",
          checked: false
        },
        {
          value: "cricket",
          checked: false
        },
        {
          value: "baseball",
          checked: false
        },
        {
          value: "box",
          checked: false
        }
      ],
      term: ""
    };
  }
  changervalue = (e, index) => {
    let items = this.state.items;
    items[index].value = e.target.value;
    this.setState({
      items
    });
  };
  handleChange = event => {
    this.setState({ term: event.target.value });
  };
  handleItemClick = ({ value, checked }) => {
    this.setState({
      items: this.state.items.map(item =>
        item.value === value ? { value, checked: !checked } : item
      )
    });
  };
  onSubmit = event => {
    event.preventDefault();
    if (this.state.term.length > 0) {
      this.setState({
        term: "",
        items: [...this.state.items, { value: this.state.term, checked: false }]
      });
    }
  };
  render() {
    return (
      <div className="center">
        <div className="mainCenter">
          <form className="App" onSubmit={this.onSubmit}>
            <input
              placeholder="add task"
              value={this.state.term}
              onChange={this.handleChange}
            />
            <button>Add to the List</button>
          </form>
          <TodoList
            onTodoClick={this.handleItemClick}
            todos={this.state.items}
            changervalue={this.changervalue}
          />
        </div>
      </div>
    );
  }
}
