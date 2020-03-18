import React, { Component } from "react";
// import './style.css';

class List extends Component {
  render() {
    const { todos, onTodoClick } = this.props;
    return (
      <ul className="list-style">
        {todos.map((item, index) => (
          <li key={index}>
            <div className="outer-div">
              <div className="item-checkbox">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => onTodoClick(item)}
                />
              </div>
              <div className="item-text">
                <span>
                  <input
                    type="text"
                    value={item.value}
                    onChange={e => this.props.changervalue(e, index)}
                    style={{border:'none'}} />{" "}
                  {item.checked ? "completed" : null}{" "}
                </span>
              </div>
            </div>
            <br />
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
