import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "./../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const CommonContext = createContext(null);
const CommonRoute = ({ children }) => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const [categoryProduct, setCategoryProduct] = useState([]);

  const firebaseRegister = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const firebaseSignIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const firebaseLogOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();

  const firebaseGoogleAuth = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubProvider = new GithubAuthProvider();
  const firebaseGithubAuth = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoader(false);
      setUser(currentUser);
    });

    return () => unSubscribe();
  }, [products, profileActive]);

  // get data from database
  useEffect(() => {
    fetch(`https://artisan-paradise-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const info = {
    firebaseRegister,
    firebaseSignIn,
    firebaseLogOut,
    user,
    setUser,
    loader,
    products,
    setLoader,
    loaded,
    setLoaded,
    profileActive,
    setProfileActive,
    firebaseGoogleAuth,
    firebaseGithubAuth,
    categoryProduct,
    setCategoryProduct,
  };
  return <CommonContext.Provider value={info}>{children}</CommonContext.Provider>;
};

export default CommonRoute;

CommonRoute.propTypes = {
  children: PropTypes.any,
};
