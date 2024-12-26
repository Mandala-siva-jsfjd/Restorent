import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [footerHeight, setFooterHeight] = useState(0);
  const programId = 13;
  const programName = "Facilitator Support System";
  const centerId = 3049;
  const roleId = 65;

  const logout = () => {
    setUser({});
    navigate("/");
  };

  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        logout,
        footerHeight,
        setFooterHeight,
        programId,
        programName,
        centerId,
        roleId,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(userContext);
};
