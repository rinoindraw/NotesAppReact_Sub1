import React, { Component } from "react";
import { FiCheck } from "react-icons/fi";
import PropTypes from "prop-types";

class Input extends Component {
  state = {
    title: "",
    body: "",
  };

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleBodyChange = (event) => {
    this.setState({ body: event.target.innerHTML });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
  };

  render() {
    const { title } = this.state;

    return (
      <main className="add-new-page__input">
        <form onSubmit={this.handleSubmit}>
          <input
            className="add-new-page__input__title"
            type="text"
            placeholder="Catatan Rahasia"
            required
            value={title}
            onChange={this.handleTitleChange}
          />
          <div
            className="add-new-page__input__body"
            contentEditable="true"
            data-placeholder="Sebenarnya saya adalah ..."
            onInput={this.handleBodyChange}
          ></div>
          <div className="add-new-page__action">
            <button className="action" type="submit" title="Save">
              <FiCheck />
            </button>
          </div>
        </form>
      </main>
    );
  }
}

Input.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default Input;
