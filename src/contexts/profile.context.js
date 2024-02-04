const { createContext, useContext, useState } = require("react");

const initialValue = {
  nickname: "",
  updateNickname: () => {},
};

const ProfileContext = createContext(initialValue);

export const useProfile = () => useContext(ProfileContext);

export function ProfileProvider({ children }) {
  const [nickname, setNickname] = useState("");

  const updateNickname = (newNickname) => {
    setNickname(newNickname);
  };
  const value = { nickname, updateNickname };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export default ProfileContext;
