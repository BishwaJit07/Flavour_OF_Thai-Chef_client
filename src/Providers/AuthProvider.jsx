import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider  } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../Component/firebase/firebase";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const provider= new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
     const [loading, setLoading] = useState(true);
     const creatUser = (email,password)=>{ setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password)
     };

     const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
  }

  const signInGoogle =()=>{
    setLoading(true);
    return signInWithPopup(auth,provider)
  }
  const signInGitHub =()=>{
    setLoading(true);
    return signInWithPopup(auth,gitProvider)
  }

     const logOut = (()=>{
      setLoading(true);
      return signOut(auth);
     })

     useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
        console.log(loggedUser);
        setUser(loggedUser);
        setLoading(false)
      })
      return ()=>{
        unsubscribe();
      }
     },[])

    const authInfo= {
        user,
        loading,
        creatUser,
        signIn,
        signInGoogle,
        signInGitHub,
        logOut,

    }
    return (
      <AuthContext.Provider value={authInfo}>
                { children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;