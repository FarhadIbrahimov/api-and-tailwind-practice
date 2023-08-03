import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <div className="nav uppercase">
        <Link to="/" className="zoom-out-link">
          <div>Refresh</div>
        </Link>
        <Link to="/second" className="zoom-out-link">
          <div>Do Not Refresh</div>
        </Link>
      </div>
    </div>
  );
}
