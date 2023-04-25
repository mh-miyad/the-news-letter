import React from 'react'
import { createContext } from 'react'
 export const AuthContext = createContext(null);


 const user =  (true)

const Authprovider = ({children}) => {
  return (
    <AuthContext.Provider value={user}>
            {children}
    </AuthContext.Provider>
  )
}

export default Authprovider