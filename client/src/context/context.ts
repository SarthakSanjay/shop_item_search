// MyContext.js
import { createContext, useContext } from 'react';

// Create a context with a default value (can be null)
const Context = createContext();

// Custom hook to use the context
export const useMyContext = () => {
  return useContext(Context);
};

// Export the context and provider
export { Context };
