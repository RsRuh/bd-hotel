import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.init'

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();

    const [user ,setUser]=useState({})

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    const userLogIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const emailVerify = ()=>{
        return sendEmailVerification(auth.currentUser)
    }

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth, provider)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return () =>{
            unsubscribe();
        }

    }, []);

    const authInfo = {
        createUser,
        updateUserProfile,
        userLogIn,
        user,
        emailVerify,
        signInWithGoogle,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>        
    );
};

export default AuthProvider;