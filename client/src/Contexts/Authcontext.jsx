import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

 export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Perform login logic here
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout logic here
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
