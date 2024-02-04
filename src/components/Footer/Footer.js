import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav>
      <ul className="h-16">
        <li>
          <Link
            to="/"
            className="bg-black text-white flex h-full items-center justify-center"
          >
            홈페이지
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
