import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBSfZTopcGu62oQc-iY7bhX7Tv_DWxafJY',
  authDomain: 'algoace.firebaseapp.com',
  projectId: 'algoace',
  storageBucket: 'algoace.appspot.com',
  messagingSenderId: '159303088682',
  appId: '1:159303088682:web:6c46b1f7ef4701222ee153',
  measurementId: 'G-M9PMFCVSDY',
};

const app = initializeApp(firebaseConfig);

export default app;
