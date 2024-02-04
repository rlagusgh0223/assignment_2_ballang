import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav>
      <ul className="h-16 grid grid-cols-4">
        <li>
          <Link to="/" className="flex h-full items-center justify-center">
            맵
          </Link>
        </li>
        <li>
          <Link
            to="/sign-in"
            className="flex h-full items-center justify-center"
          >
            상태
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
