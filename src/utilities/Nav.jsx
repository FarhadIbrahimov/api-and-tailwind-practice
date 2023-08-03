import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <div className="nav uppercase">
        <Link to="/" className="zoom-out-link">
          <div>main</div>
        </Link>
        {/* <Link to="/second" > */}
        <div className="zoom-out-link" onClick={() => window.location.reload()}>
          joke
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}
