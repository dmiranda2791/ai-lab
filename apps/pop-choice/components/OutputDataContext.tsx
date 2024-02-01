import React, { createContext, useState } from "react";

export interface OutputData {
  title: string;
  year: number;
  message: string;
  posterUrl: string;
}

export interface OutputContextType {
  outputData: OutputData[] | null;
  setOutputData: (data: OutputData[]) => void;
}

export const OutputDataContext = createContext<OutputContextType>({
  outputData: [],
  setOutputData: (data: any) => {},
});

export const OutputDataProvider = ({ children }) => {
  const [outputData, setOutputData] = useState([]);

  return (
    <OutputDataContext.Provider value={{ outputData, setOutputData }}>
      {children}
    </OutputDataContext.Provider>
  );
};
