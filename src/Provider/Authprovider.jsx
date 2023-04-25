import React, { useState } from 'react'
import { createContext } from 'react'
import app from '../Firebase/Firebase.init'
 export const AuthContext = createContext(null);
 import getAuth from 'firebase'



   const auth = getAuth(app)

const Authprovider = ({children}) => {

  const [ user , setUser ] = useState(null);
  const    userLoger = ()=>{
    return    create
  }

 const  authProvider = {
  user ,
  userLoger,


 }

  return (
    <AuthContext.Provider value={authProvider}>
            {children}
    </AuthContext.Provider>
  )
}

export default Authprovider