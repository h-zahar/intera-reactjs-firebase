import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    const auth = getAuth();

    const sendUserToDatabase = (fetchData) => {
        fetch('https://stark-sierra-52397.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fetchData)
        })
        .then(res => res.json())
        .then(data => {  })
        .catch(error => {
            if (error) {
                window.location.reload();
            }
        });

    }

    const accessWithGoogle = (history, redirected_uri) => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user);
            const putData = {fullName: result.user.displayName, email: result.user.email, userImg: result.user.photoURL, isAdmin: false};
            sendUserToDatabase(putData);
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
            const putData = {fullName: fullName, email: email, isAdmin: false};
            sendUserToDatabase(putData);
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

    useEffect(() => {
        setIsAdminLoading(true);
        fetch(`https://stark-sierra-52397.herokuapp.com/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data?.isAdmin))
        .catch(error => {
            if (error) {
                window.location.reload();
            }
        })
        .finally(() => setIsAdminLoading(false));
    }, [user?.email]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {  })
        .catch(error => {
            if (error) {
                window.location.reload();
            }
        })
        .finally(() => setIsLoading(false));
    }

    return {
        user,
        isAdmin,
        isAdminLoading,
        isLoading,
        setUser,
        setIsLoading,
        setIsAdminLoading,
        registerWithMail,
        loginWithMail,
        accessWithGoogle,
        logOut
    }
}

export default useFirebase;