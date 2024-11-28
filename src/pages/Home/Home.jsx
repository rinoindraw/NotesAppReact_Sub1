import React, { Component } from "react";
import { getActiveNotes } from "../../utils/local-data";
import List from "../../components/List/List";
import Button from "../../components/Button/Button";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
    };
  }

  render() {
    const { notes } = this.state;

    return (
      <main>
        <List notes={notes} />
        <Button />
      </main>
    );
  }
}

export default Home;
