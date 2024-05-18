import { createContext, useContext } from 'react';
//* creating the global context/ global store
let UserContext = createContext();

//* Providing the global context/ global store's access to the each component
let UserContext_Provider = UserContext.Provider;

// //* custom hook to consume the data from the global context/ global store
// export function useContextHook() {
//   return useContext(UserContext);

export { UserContext, UserContext_Provider };
