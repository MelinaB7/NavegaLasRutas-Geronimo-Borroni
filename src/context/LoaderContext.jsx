import { createContext, useState, useContext } from "react";

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [cargando, setCargando] = useState(false);

  return (
    <LoaderContext.Provider value={{ cargando, setCargando }}>
      {cargando && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-70 z-50">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin mb-4"></div>
          <p className="text-blue-900 text-lg font-semibold">Cargando...</p>
        </div>
      )}
      {children}
    </LoaderContext.Provider>
  );
};
