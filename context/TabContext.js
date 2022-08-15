// import createContext and useState
import { createContext, useState, useEffect } from "react";
// Initiate context
const TabContext = createContext();

const TabProvider = ({ children }) => {
  // Manage theme state
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
};

export { TabContext, TabProvider };
