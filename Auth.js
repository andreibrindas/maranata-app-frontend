import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import Login from "./components/LoginScreen/Login";
import { db } from "./firebase";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setCurrentUser(null);
        return;
      }
      const token = await user.getIdToken();
      setCurrentUser(user);
      console.log("user", user);
      queryAdmin(user);
      setUserProfile(user);
    });
  }, []);

  const queryAdmin = async (usr) => {
    const docRef = doc(db, "admins", usr.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  const setUserProfile = async (usr) => {
    await setDoc(doc(db, "users", usr.uid), {
      name: usr.displayName,
      email: usr.email,
      phoneNumber: usr.phoneNumber,
    });
  };

  useEffect(() => {});

  if (!currentUser) {
    return <Login />;
  } else {
    return (
      <AuthContext.Provider value={{ currentUser, isAdmin }}>
        {children}
      </AuthContext.Provider>
    );
  }
};

export const useAuth = () => useContext(AuthContext);
