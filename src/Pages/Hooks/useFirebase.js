import { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import initApp from '../Firebase/Firebase.init';

initApp()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [authError, setAuthError] = useState('')
  const [admin , setAdmin] = useState(false)


  const Googleprovider = new GoogleAuthProvider()
  const auth = getAuth()

  const googleSignIn = (location, history) => {
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
      }).catch((error) => {
        setAuthError(error.message)
      });

  }
    //register opration
    const registerUser = (email, password, name, history) => {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              setAuthError('');
              const newUser = { email, displayName: name };
              setUser(newUser);
              // save user to the database
              saveUser(email, name, 'POST');
              // send name to firebase after creation
              updateProfile(auth.currentUser, {
                  displayName: name
              }).then(() => {
              }).catch((error) => {
              });
              history.replace('/home');
          })
          .catch((error) => {
              setAuthError(error.message);
          })
          .finally(() => setLoading(false));
  }

        //sign in operation
    const signIn = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
    
            setAuthError('')
            // const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            setAuthError(error.message)
    
          })
          .finally(() => setLoading(false))
      }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
    
            setUser(user)
    
          } else {
            setUser({})
          }
          setLoading(false)
        });
        return () => unsubscribe
      }, [auth])


      //logout opearation
    const logOut = () => {
        signOut(auth)
          .then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setLoading(false));
      }

      useEffect(() => {
        fetch(`https://immense-crag-91398.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


      const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://immense-crag-91398.herokuapp.com/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        googleSignIn,
        registerUser,
        signIn,
        logOut,
        admin,
        loading,
        authError,
    }
};

export default useFirebase;