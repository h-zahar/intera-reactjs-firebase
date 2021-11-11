import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const accessWithGoogle = (history, redirected_uri) => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user);
            history.push(redirected_uri);
        })
        .catch(() => { })
        .finally(() => setIsLoading(false));
    };

    const updateDetailsOnForm = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
          })
          .then(() => {  })
          .catch((error) => {  });
    }

    const registerWithMail = (fullName, email, password, history, redirected_uri) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const newUser = {...result.user};
            newUser.displayName = fullName;
            setUser(newUser);
            updateDetailsOnForm(fullName);
            history.push(redirected_uri);
        })
        .catch(() => {  })
        .finally(() => setIsLoading(false));
    };

    const loginWithMail = (email, password, history, redirected_uri) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
            history.push(redirected_uri);
        })
        .catch(() => {  })
        .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    const logOut = () => {
        setIsLoading(true);
        
        signOut(auth)
        .then(() => { setUser({}) })
        .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        setUser,
        setIsLoading,
        registerWithMail,
        loginWithMail,
        accessWithGoogle,
        logOut
    }
}

export default useFirebase;