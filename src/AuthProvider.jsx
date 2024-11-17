
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.init';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{

       return createUserWithEmailAndPassword(auth, email, password);
       
    }

    const loginUser = (email, password) =>{
        setUser(true)
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            setUser(currentUser);
        })
        return () =>{
            unSubscribe()
        }
    })


    const name = 'Nadu'
    const authInfo ={
        createUser,
        loginUser,
        logOut,
        loading,
        user,
        name,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
















/***
 * 
 * 1. create a context with null as default value
 * 2. Create a provider in the anynameProvider component such as: AuthProvider
 * 3. Set a default value={} in after context.provider
 * 4. Use the authprovider in the main jsx
 * 5. Access the children named router inside the authprovider such as: routes are my main part 
 * 5. Now destruct the children
 * 6. Now set a children as default in the .provider
 * 7. Export context
 */