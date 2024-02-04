import React, { useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import HomePage from "../HomePage";

function SignInPage() {
  const { isLoggedIn, signIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickSignIn = () => {
    if (!username || !password)
      return alert("아이디 또는 비밀번호를 입력해 주세요");
    if (username === "udemy" && password === "udemy") {
      signIn();
    } else {
      return alert("아이디 또는 비밀번호가 잘못 입력되었습니다");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
          <button onClick={handleClickSignIn}>로그인</button>
        </>
      )}
    </div>
  );
}

export default SignInPage;
