import React from "react";
import { useLocation } from "react-router-dom";

const AuthContext = React.createContext({
  login: (user) => {},
  logout: () => {},
  CheckToken: () => {},
});

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const login = (user) => {
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    // setAuthenticated(true);
  };
  const logout = () => {
    localStorage.removeItem("user");
    window.location = "/";
    // setAuthenticated(false);
  };

  const location = useLocation();

  const CheckToken = () => {
    if (!localStorage.hasOwnProperty("user") && location.pathname !== "/") {
      window.location = "/";
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, CheckToken }}>
      {children}
    </AuthContext.Provider>
  );
};
