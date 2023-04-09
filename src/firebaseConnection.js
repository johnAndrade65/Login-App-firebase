import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC0s5wvBANNaeq76CuZ6v10sGS_QWTs2_s",
  authDomain: "login-react-app-be61f.firebaseapp.com",
  projectId: "login-react-app-be61f",
  storageBucket: "login-react-app-be61f.appspot.com",
  messagingSenderId: "407578076736",
  appId: "1:407578076736:web:fd5b24bc53c22f701861a5",
  measurementId: "G-KTDDQLBNTB"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };