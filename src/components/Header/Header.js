import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import { useProfile } from "../../contexts/profile.context";

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const { nickname } = useProfile();

  return (
    <nav>
      <ul className="bg-black text-white flex h-full items-center justify-between">
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/cart-Page">장바구니</Link>
            </li>
            {nickname && <li>{nickname}</li>}
            <li>
              <Link to="/my-page">마이페이지</Link>
            </li>
            <li>
              <button onClick={logOut}>로그아웃</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="./sign-in">장바구니</Link>
            </li>
            <li>
              <Link to="./sign-in">로그인</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Header;
