import React, { Component } from "react";
import PropTypes from "prop-types";
import NotesDetail from "../../components/NotesDetail/NotesDetail";
import { deleteNote, getNote } from "../../utils/local-data";
import NotFoundPage from "../NotFound/NotFound";
import { useParams, useNavigate } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    deleteNote(id);
    this.props.navigate("/");
  }

  render() {
    const { note } = this.state;

    if (!note) {
      return <NotFoundPage />;
    }

    if (note === "") {
      return <p>Catatan tidak ditemukan</p>;
    }

    return (
      <NotesDetail
        onDelete={this.handleDelete}
        {...note}
      />
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Detail;
