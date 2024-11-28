import React from "react";
import PropTypes from "prop-types";
import { BiTrashAlt } from "react-icons/bi";

export default function DetailButton({ id, onDelete }) {
  return (
    <div className="detail-page__action">
      <button
        className="action"
        type="button"
        title="Delete"
        onClick={() => onDelete(id)}
      >
        <BiTrashAlt />
      </button>
    </div>
  );
}

DetailButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
