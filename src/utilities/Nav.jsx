import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <div className="nav uppercase">
        <Link to="/">
          <div>Refresh</div>
        </Link>
        <Link to="/second">
          <div>Do Not Refresh</div>
        </Link>
      </div>
    </div>
  );
}
