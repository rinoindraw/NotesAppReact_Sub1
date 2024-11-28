import React, { Component } from "react";
import Notes from "../Notes/Notes";
import PropTypes from "prop-types";

class List extends Component {
  render() {
    const { notes } = this.props;

    if (!notes.length) {
      return (
        <section className="notes-list-empty">
          <p className="notes-list__empty">Empty</p>
        </section>
      );
    }

    return (
      <section className="notes-list">
        {notes.map((note) => (
          <Notes key={note.id} id={note.id} {...note} />
        ))}
      </section>
    );
  }
}

List.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
