import React, { useRef } from "react";
import { useProfile } from "../../contexts/profile.context";
import Page from "../../components/Page";

function MyPage() {
  const { updateNickname } = useProfile();
  const nicknameInputRef = useRef(null);

  const handleClickUpdateNickname = () => {
    const inputValue = nicknameInputRef.current.value;
    updateNickname(inputValue);
  };
  return (
    <Page>
      <section>
        <h2>닉네임 수정</h2>
        <input
          ref={nicknameInputRef}
          type="text"
          placeholder="닉네임을 입력하세요"
        />
        <button onClick={handleClickUpdateNickname}>닉네임 변경</button>
      </section>
    </Page>
  );
}

export default MyPage;
