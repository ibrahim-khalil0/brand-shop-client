import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, newUser => {
            setUser(newUser)
            setLoading(false)
        })
        return unSubscribe
    }, [])


    const authDetails = {
        loading,
        setLoading,
        createNewUser,
        signInUser,
        signInWithGoogle,
        user,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider  value = {authDetails}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;