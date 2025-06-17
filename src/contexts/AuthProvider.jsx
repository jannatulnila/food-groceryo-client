import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';



const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider()
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }
    const GoogleSignIn = () => {
        return signInWithPopup(auth, provider);
    }

    const logout = async () => {
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, { withCredentials: true });
        } catch (err) {
            console.error('Logout error:', err.message);
        }
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // jwt post request for jwt using user email
            // api end-point: /jwt post method
            if (currentUser) {
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
                    email: currentUser?.email,
                },
                    {
                        withCredentials: true, //mandatory to store token in cookie browser
                    })
                    .then(res => {
                        
                        console.log('jwt set in cookie', res.data)
                    })
                    .catch((error => {
                        console.log('jwt error', error.message)
                    }))
            }

            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        createUser,
        loading,
        signInUser,
        user,
        logout,
        updateUser,
        setUser,
        GoogleSignIn
    }

    return (
        <AuthContext value={authInfo} >
            {children}
        </AuthContext>
    );
};

export default AuthProvider;