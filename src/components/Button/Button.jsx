import React, { Component } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

class Button extends Component {
  render() {
    return (
      <div className="homepage__action">
        <Link to="/notes/create">
          <button className="action" type="button" title="Add Note">
            <FiPlus />
          </button>
        </Link>
      </div>
    );
  }
}

export default Button;
