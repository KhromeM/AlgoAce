import { createContext, useContext, useState, useEffect } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';
import app from './firebase';

const auth = getAuth(app);
const authContext = createContext();
export const useAuth = () => useContext(authContext);
export const AuthProvider = ({ children }) => {
  const auth = useGetAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
const useGetAuth = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      setUser(user);
    });
    return () => unsub();
  });
  const login = async () => {
    const provider = new GithubAuthProvider();
    return signInWithRedirect(auth, provider);
  };
  const logout = async () => {
    return await signOut(auth);
  };
  return { user, login, logout };
};
