import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
  apiKey: "AIzaSyDHpM7TX4VLoHyWxyzYww_IFdfjay38CM0",
  authDomain: "todolist-46426.firebaseapp.com",
  projectId: "todolist-46426",
  storageBucket: "todolist-46426.appspot.com",
  messagingSenderId: "14557682139",
  appId: "1:14557682139:web:e2c686cd7c19f212416ffe",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
