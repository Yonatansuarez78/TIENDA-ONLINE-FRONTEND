import React, { createContext, useContext, useState } from "react";

// Crea el contexto
const AuthContext = createContext();

// Hook personalizado para acceder al contexto
export const useAuth = () => {
  return useContext(AuthContext);
};

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Función para actualizar el usuario
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
