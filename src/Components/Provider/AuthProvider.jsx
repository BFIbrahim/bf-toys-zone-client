import { Children, createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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
        signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;