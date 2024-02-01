import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from "react";

const HeaderContext = createContext({
  headerTitle: "PopChoice",
  setHeaderTitle: (title?: string) => {},
});

export const useHeaderTitle = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderTitle must be used within a HeaderProvider");
  }
  return context;
};

export const HeaderProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState("PopChoice");

  const handleSetHeaderTitle = (title?: string) => {
    setHeaderTitle(title || "PopChoice");
  };
  return (
    <HeaderContext.Provider
      value={{ headerTitle, setHeaderTitle: handleSetHeaderTitle }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
