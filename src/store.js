import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { createStore, combineReducers, compose } from 'redux';
import {
reactReduxFirebase,
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCk6QAk24OQMAaZzLBc02iaFc81DtuC9w",
    authDomain: "loan-panel.firebaseapp.com",
    projectId: "loan-panel",
    storageBucket: "loan-panel.appspot.com",
    messagingSenderId: "1059353566149",
    appId: "1:1059353566149:web:81c104ea77c57ea8a949ac",
    measurementId: "G-TF26Y333T3"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

// Create initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(rootReducer, initialState,
    compose(reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;