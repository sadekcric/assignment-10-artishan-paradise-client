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
import Swal from "sweetalert2";

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

  //Add product
  const handleAddProduct = (e) => {
    setLoader(true);
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stock = form.stock.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const displayName = user.displayName;
    const email = user.email;
    const processingTime = form.processingTime.value;
    const photoURL = user.photoURL;

    const product = { name, price, rating, category, customization, stock, details, photo, processingTime, displayName, email, photoURL };

    fetch(`https://artisan-paradise-server.vercel.app/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          setLoader(false);
        }
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoader(false);
      setUser(currentUser);
    });

    return () => unSubscribe();
  }, [products, profileActive, categoryProduct]);

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
    handleAddProduct,
  };
  return <CommonContext.Provider value={info}>{children}</CommonContext.Provider>;
};

export default CommonRoute;

CommonRoute.propTypes = {
  children: PropTypes.any,
};
