import React, { Component } from "react";
import PropTypes from "prop-types";
import DetailButton from "../DetailButton/DetailButton";
import { showFormattedDate } from "../../utils";

class NotesDetail extends Component {
  render() {
    const { id, title, createdAt, body, onDelete } = this.props;

    return (
      <main className="detail-page">
        <h3 className="detail-page__title">{title}</h3>
        <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
        <div className="detail-page__body">{body}</div>
        <DetailButton id={id} onDelete={onDelete} />
      </main>
    );
  }
}

NotesDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotesDetail;
