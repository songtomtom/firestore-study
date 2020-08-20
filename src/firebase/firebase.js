import firebase from 'firebase';
import 'firebase/firestore';

import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firestore = firebase.firestore();
const analytics = firebase.analytics();

export { firestore, analytics };
