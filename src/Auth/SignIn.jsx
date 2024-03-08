import { Password } from "@mui/icons-material";
import React, { useState } from "react";
import { auth, db } from "./Firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { QuerySnapshot, collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrorMsg] = useState("");

  const handleSubmission = async(e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        // Signed in

        const userID = userCredential.user.uid;

        const docRef = doc(db, "users", userID);

        const docData = await getDoc(docRef);

        const role = docData.data().role;

        if(role == "USER"){
          console.log("user it is");
          navigate("/userdashboard")
        }else{
          console.log("admin it is");
          navigate("/admindashboard")
        }
        

      })
      .catch((error) => {
        setErrorMsg(error.message);
      });

    // try {
    //   const users = await signInWithEmailAndPassword(auth, email, password);

    //   console.log(users);

    //   try {
    //     const q = query(
    //               collection(db, "users"), 
    //               where('uid', '==', users?.user?.uid)
    //               );
        
        
    //     const data = onSnapshot(q, (QuerySnapshot) => {
    //       let user;

    //       QuerySnapshot.forEach((doc) => user = doc.data());
    //       localStorage.setItem("users", JSON.stringify(user));

    //       console.log(user);

    //       if(user.role == "user"){
    //         navigate("/");
    //       }else{
    //         navigate("/admindashboard")
    //       }
    //     })          
    //   } catch (error) {
    //     console.log(error);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorMsg(errorMessage)
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };


  return (
    <>
      <div classNameName="">
        <div className="font-[sans-serif] text-[#333]">
          <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
            <div className="grid md:grid-cols justify-center items-center gap-4 max-w-7xl w-full">
              <div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                <form className="space-y-6">
                  <div className="mb-10">
                    <h3 className="text-3xl font-extrabold">Sign in</h3>
                    <p className="text-sm mt-4">
                      Sign in to your account and explore a world of
                      Electronics. Your journey begins here.
                    </p>
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">Email</label>
                    <div className="relative flex items-center">
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-4"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="10"
                          cy="7"
                          r="6"
                          data-original="#000000"
                        ></circle>
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">Password</label>
                    <div className="relative flex items-center">
                      <input
                        name="password"
                        type="password"
                        required
                        className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                        viewBox="0 0 128 128"
                      >
                        <path
                          d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label for="remember-me" className="ml-3 block text-sm">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a
                        href="jajvascript:void(0);"
                        className="text-blue-600 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <p className=" text-center">{error}</p>

                  <div className="!mt-10">
                    <button
                      type="button"
                      className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none"
                      onClick={handleSubmission}
                    >
                      Log in
                    </button>
                  </div>
                  <p className="text-sm !mt-10 text-center">
                    Don't have an account{" "}
                    <Link
                      to={"/SignUp"}
                      className="text-blue-600 hover:underline ml-1 whitespace-nowrap"
                    >
                      Register here
                    </Link>
                  </p>
                </form>

                <div className="mt-10 grid space-y-4" onClick={LoginWithGoogle}>
                  <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                    <div className="relative flex items-center space-x-4 justify-center">
                      <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        className="absolute left-0 w-5"
                        alt="google logo"
                      />
                      <span className="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        Continue with Google
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
