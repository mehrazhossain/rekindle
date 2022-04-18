// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAaGf8aADflRGoBcES7jvl-F5ZFYqAEUYo',
  authDomain: 'rekindle-16ebd.firebaseapp.com',
  projectId: 'rekindle-16ebd',
  storageBucket: 'rekindle-16ebd.appspot.com',
  messagingSenderId: '714173395422',
  appId: '1:714173395422:web:e6fd56c8822b3c42576d4f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
