import React, { createContext } from 'react'
export const DataContext = createContext(); 

function DataProvider({ children }) {
  return (
    <DataContext.Provider>
      {children}
    </DataContext.Provider>
  );
}
export default DataProvider;
