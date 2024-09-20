import { useContext, useCallback, useState, createContext } from 'react';

const ToasterContext = createContext();

export default function ToasterProvider({ children }) {
  const [toaster, setStatus] = useState({});

  const setToaster = useCallback(
    (newStatus) => {
      setStatus(newStatus);
    },
    [setStatus],
  );

  return (
    <ToasterContext.Provider value={{ setToaster, toaster }}>{children}</ToasterContext.Provider>
  );
}

export function useToasterConsumer() {
  const context = useContext(ToasterContext);

  return context;
}
