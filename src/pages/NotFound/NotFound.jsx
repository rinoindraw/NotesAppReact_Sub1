import React, { Component } from "react";

class NotFoundPage extends Component {
  render() {
    return (
      <main className="not-found">
        <h1 className="not-found__number">404</h1>
        <p className="not-found__text">Page Not Found</p>
      </main>
    );
  }
}

export default NotFoundPage;
