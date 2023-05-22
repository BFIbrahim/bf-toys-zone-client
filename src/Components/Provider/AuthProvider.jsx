import { Children, createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";




export const AuthContext = createContext();
const auth = getAuth(app);




const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    const LogoutUser = () =>{
        return signOut(auth)
    }

    useEffect( () => {
        const unsubscribe =  onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser)
            console.log(loggedUser);
        })

        return () => {
            return unsubscribe
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signInUser,
        LogoutUser,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;