import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>
        <Link to="/">Aplikasi Catatan</Link>
      </h1>
      {/* <div className="navigation">
        <ul>
          <li>
            <Link to="/archives">Archive</Link>
          </li>
        </ul>
      </div> */}
    </>
  );
}
