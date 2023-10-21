import React, { createContext, useState } from "react";

interface ISearchModalContextProviderProps {
  children: React.ReactNode;
}

export interface ISearchModalContextType {
  isModalOpened: boolean;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchModalContext = createContext<ISearchModalContextType | null>(
  null
);

function SearchModalContextProvider({
  children,
}: ISearchModalContextProviderProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <SearchModalContext.Provider value={{ isModalOpened, setIsModalOpened }}>
      {children}
    </SearchModalContext.Provider>
  );
}

export default SearchModalContextProvider;
