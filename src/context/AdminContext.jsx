import { createContext, useState } from "react";

const INITIAL_STATE = {
  admin: JSON.parse(localStorage.getItem("anywhere-admin")) || null,
  setAdmin: () => {},
};

export const AdminContext = createContext(INITIAL_STATE);

const AdminUserContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("anywhere-admin")));

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminUserContextProvider;
