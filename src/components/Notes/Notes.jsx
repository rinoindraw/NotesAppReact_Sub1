import React, { Component } from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils";
import PropTypes from "prop-types";

class Notes extends Component {
  truncateBody = (body) => {
    const words = body.split(" ");
    return words.length > 18 ? words.slice(0, 18).join(" ") + "..." : body;
  };

  render() {
    const { id, title, createdAt, body } = this.props;

    return (
      <article className="note-item">
        <h3 className="note-item__title">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h3>
        <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
        <p className="note_item__body">{this.truncateBody(body)}</p>
      </article>
    );
  }
}

Notes.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Notes;
