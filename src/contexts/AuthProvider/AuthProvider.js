import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';



export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    const providerLogin=(provider)=>{
        return signInWithPopup(auth,provider)
    }

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
   
    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(newUser)=>{
            console.log('user inside',newUser);
            setUser(newUser);
        });
        return()=>{
            unsubscribe();
        }
    },[])
    const authInfo={user,providerLogin,logOut,createUser,logIn}
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;