import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCPhO8U7uC9EQesZiUUBidqbmGhQgn242o",
  authDomain: "poject-6355d.firebaseapp.com",
  projectId: "poject-6355d",
  storageBucket: "poject-6355d.appspot.com",
  messagingSenderId: "65734710701",
  appId: "1:65734710701:web:d36bc135a6f895867d7d24",
  measurementId: "G-ELGHVE40M3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const provider1 = new GithubAuthProvider();

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  updatePassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const auth = getAuth();

//로그인 하기 파이어베이스
document.getElementById("signinbutton").addEventListener("click", (event) => {
  event.preventDefault();
  const signinemail = document.getElementById("signinemail").value;
  const signinpassword = document.getElementById("signinpassword").value;
  signInWithEmailAndPassword(auth, signinemail, signinpassword)
    .then((userCredential) => {
      // Signed in
      alert("로그인성공");

      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      alert("로그인실패");
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

//구글로그인 하기 파이어베이스
document.getElementById("googleLogin").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      alert("구글 로그인성공");
      var link = "https://www.google.com/";
      location.href = link;
      location.replace(link);
      window.open(link);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(result);
      // ...
    })
    .catch((error) => {
      alert("로그인실패");
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error);
      // ...
    });
});

document.getElementById("gitLogin").addEventListener("click", () => {
  signInWithPopup(auth, provider1)
    .then((result) => {
      alert("깃허브 로그인 성공");
      var link = "https://www.google.com/";
      location.href = link;
      location.replace(link);
      window.open(link);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      // ...
    })
    .catch((error) => {
      alert("로그인실패");
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
});

document.getElementById("password").addEventListener("click", () => {
  const changePassword = async (newPassword) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const res = await updatePassword(user, newPassword);
      console.log(res);
    } catch ({ code, message }) {
      console.log(code);
      alert(errorMessage[code]);
    }
  };

  const changePasswordUsingEmail = async () => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, authInfo.email);
      alert(authMessage["auth/post-password-reset-mail"]);
    } catch ({ code, message }) {
      console.log(code);
      alert(errorMessage[code]);
    }
  };
});
